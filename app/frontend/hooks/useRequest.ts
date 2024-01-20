import { useCallback, useState } from "react";

export type UseRequestResult<TResponse> = {
  request: (input: RequestInfo | URL, init?: RequestInit) => Promise<TResponse>;
  isFetching: boolean;
}

export const useRequest = <TResponse>(): UseRequestResult<TResponse> => {
  const [isFetching, setFetching] = useState(false);

  const request = useCallback(async (input: RequestInfo | URL, init?: RequestInit) => {
    let response: Response;
    let json: any;

    try {
      setFetching(true);

      const finalInit = {
        ...(init || {})
      };

      if (init?.body && typeof init?.body !== "string") {
        finalInit.body = JSON.stringify(init.body);
      }

      response = await fetch(input, finalInit);
    } catch (error) {
      setFetching(false);
      throw new Error(`Could not fetch: ${input}. Error: ${error}`);
    }

    try {
      const contentLength = response.headers.get("Content-Length");
      if (contentLength && parseInt(contentLength, 10) > 0) {
        json = await response.json();
      }
    } catch (error) {
      setFetching(false);
      throw new Error(`Could not parse response: ${input}. Error: ${error}`);
    }

    setFetching(false);

    if (!response.ok) {
      throw new Error(`Response failed with status code ${response.status} - ${response.statusText}. Payload: ${json}`);
    }

    return json as TResponse;
  }, [setFetching]);

  return {
    request,
    isFetching
  };
};
