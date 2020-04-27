import { useEffect, useRef, useState } from 'react';

const INTERVAL_MS = 100;
type handler = () => void;

export interface CountdownSettings {
  ms: number;
  intervalMs?: number;
  onZero: () => void;
}

const useCountdown = (settings: CountdownSettings) => {
  const {ms, onZero, intervalMs = INTERVAL_MS} = settings;
  const [msLeft, setMsLeft] = useState(ms);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const clearRef = useRef<number>();

  const start = () => setIsRunning(true);
  const pause = () => setIsRunning(false);
  const reset = () => setMsLeft(ms);
  const clear = () => window.clearTimeout(clearRef.current);

  useEffect(() => {
    const update = () => {
      setMsLeft((prevMsLeft:number) => {
        const msLeft = Math.max(prevMsLeft - intervalMs, 0);
        if (msLeft <= 0) {
          setIsRunning(false);
          onZero();
          return 0;
        }
        return msLeft;
      });
    };

    if (isRunning) {
      clearRef.current = setTimeout(update, intervalMs);
      return clear;
    }
  }, [intervalMs, isRunning, msLeft, onZero]);

  return [
    msLeft,
    isRunning,
    start,
    pause,
    reset,
  ] as [number, boolean, handler, handler, handler];
};

export default useCountdown;
