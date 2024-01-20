import { useEffect, useState, useRef } from "react";
import { useRequest } from "./useRequest";

export type UsePollRequestResult<TResponse> = {
  data?: TResponse;
  isFetching: boolean;
  isError: boolean;
};

export const usePollRequest = <TResponse>(
  input: RequestInfo | URL,
  init?: RequestInit,
  shouldPoll = true,
  pollInterval = 5000
): UsePollRequestResult<TResponse> => {
  const {
    request,
    isFetching
  } = useRequest<TResponse>();

  const [data, setData] = useState<TResponse>();
  const [isError, setError] = useState(false);
  const [isPolling, setPolling] = useState(true);

  const pollingRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (!shouldPoll) {
      return;
    }

    const stopPolling = () => {
      if (pollingRef.current) {
        clearInterval(pollingRef.current);
        pollingRef.current = undefined;
        setPolling(false);
      }
    };

    const poll = async () => {
      try {
        console.log("Polling...", input);
        const responseData = await request(input, init);

        console.log("resp", responseData)
        if (Boolean(responseData)) {
          stopPolling();
          setData(responseData);
        }
      } catch (error) {
        console.error("Error while polling", error)
        setError(true);
        stopPolling();
      }
    };

    if (isPolling) {
      poll();
      pollingRef.current = setInterval(poll, pollInterval);
    }

    return () => {
      if (shouldPoll) {
        stopPolling();
      }
    };
  }, [shouldPoll, isPolling, input, init, request, pollInterval]);

  return {
    data,
    isFetching,
    isError
  };
};
