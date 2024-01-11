import { DependencyList, useEffect } from 'react';

export const useEffectAsync = (
  asyncFunction: () => Promise<void>,
  deps?: DependencyList,
) => {
  useEffect(() => {
    (async () => {
      await asyncFunction();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};
