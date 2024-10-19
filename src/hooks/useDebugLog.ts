import { useEffect } from 'react';

function useDebugLog<T>(value: T, label: string = 'Data') {
  useEffect(() => {
    console.log(`%c${label}:`, 'color: aqua; background-color: black;', value);
  }, [value]);
}

export default useDebugLog;