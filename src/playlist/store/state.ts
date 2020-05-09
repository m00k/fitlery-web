const BREAK_MS = 3 * 1000;
const WORK_MS = 6 * 1000;
const exercises: PlaylistItemData[] = [
  ...createPair('Wall Sit'),
  ...createPair('Lunge'),
  ...createPair('Plank'),
  ...createPair('Reverse Crunch'),
  ...createPair('Jumping Jacks'),
  ...createPair('Push Ups'),
  ...createPair('Squats'),
  ...createPair('Shadow Boxing'),
  ...createPair('Side Plank (Left)'),
  ...createPair('Side Plank (Right)'),
  ...createPair('Knee Strikes'),
  ...createPair('Knee High Running'),
];

const NOT_FOUND = -1;

// TODO: naming conventions: interfaces vs models
export interface PlaylistData {
  short: string;
  name: string;
  description?: string;
  items: PlaylistItemData[];
}

export interface PlaylistState extends PlaylistData {
  currentItemIndex: number;
}

// TODO: real data
export const initialState: PlaylistState = {
  short: '18',
  name: '18min',
  description: 'TODO: real data',
  items: exercises, 
  currentItemIndex: NOT_FOUND,
}

export interface PlaylistItemData {
  name: string;
  durationMs: number;
  tags?: {[key: string]: any};
}

function createPair(name: string): [PlaylistItemData, PlaylistItemData] {
  const b = {
    name: `next up: ${name}`,
    durationMs: BREAK_MS,
    tags: {isBreak: true},
  };
  const w = {
    name,
    durationMs: WORK_MS,
  };
  return [b, w];
}
