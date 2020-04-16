import { Time } from "./time";


const fromNumber = (timeMs: number): Time => {
  const h = Math.floor(timeMs / 1000 / 60 / 60);
  const m = Math.floor((timeMs / 1000 / 60) % 60);
  const s = Math.floor((timeMs / 1000) % 60);
  const ms = timeMs % 1000;
  return { h, m, s, ms };
};

const format = (time: Time): string => {
  const h = time.h.toString().padStart(2, '0');
  const m = time.m.toString().padStart(2, '0');
  const s = time.s.toString().padStart(2, '0');
  const ds = Math.floor(time.ms / 100).toString();
  return time.h > 0
    ? `${h}:${m}:${s}.${ds}`
    : `${m}:${s}.${ds}`;
};

const toTimeString = (timeMs: number) => format(fromNumber(timeMs));

const timeUtils = {
  fromNumber,
  toTimeString,
  format,
};

export default timeUtils;