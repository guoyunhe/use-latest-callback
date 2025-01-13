import { useCallback, useRef } from 'react';

export function useLatestCallback<T extends unknown[], U>(
  callback: (...args: T) => U,
): (...args: T) => U {
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  return useCallback((...args: T) => callbackRef.current?.(...args), []);
}
