const BREAK_MS = 3 * 1000;
const WORK_MS = 6 * 1000;
const exercises: PlaylistItemData[] = [
  ...createPair('Wall Sit'),
  ...createPair('Lunge'),
  ...createPair('Plank'),
  ...createPair('Reverse Crunch'),
  ...createPair('Shadow Boxing'),
  ...createPair('Side Plank (Left)'),
  ...createPair('Side Plank (Right)'),
  ...createPair('Knee Strikes'),
  ...createPair('Knee High Running'),
];

const NOT_FOUND = -1;

export interface PlaylistState {
  name: string;
  items: PlaylistItemData[];
  currentItemIndex: number;
}

export const initialState: PlaylistState = {
  name: '18', // TODO: real data
  items: exercises, // TODO: real data
  currentItemIndex: NOT_FOUND,
}

export interface PlaylistItemData {
  name: string;
  durationMs: number;
  tags?: string[];
}

function createPair(name: string): [PlaylistItemData, PlaylistItemData] {
  const b = {
    name: `next up: ${name}`,
    durationMs: BREAK_MS,
    tags: ['break'],
  };
  const w = {
    name,
    durationMs: WORK_MS,
  };
  return [b, w];
}
