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
  const clear = () => window.clearTimeout(clearRef.current);
  const reset = () => setMsLeft(ms);

  useEffect(() => {
    if (isRunning) {
      clearRef.current = setTimeout(() => {
        if (msLeft <= 0) {
          setIsRunning(false);
          onZero();
        } else {
          setMsLeft(prevMsLeft => Math.max(prevMsLeft - intervalMs, 0));
        }
      }, intervalMs);
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
