import { useEffect, useRef, useState } from "react";
import { useRequest } from "./useRequest";

export type UseFetchRequestResult<TResponse> = {
  isFetching: boolean;
  isError: boolean;
  data?: TResponse;
}

export const useFetchRequest = <TResponse>(input: RequestInfo | URL, init?: RequestInit): UseFetchRequestResult<TResponse> => {
  const {request, isFetching} = useRequest<TResponse>();

  const [isError, setError] = useState(false);
  const [data, setData] = useState<TResponse>();

  const hasFired = useRef<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        hasFired.current = true;

        const response = await request(input, init);

        setData(response);
      } catch(error) {
        setError(true);
      }
    })();
  }, []);

  return {
    data,
    isError,
    isFetching: isFetching || !hasFired.current,
  }
};
