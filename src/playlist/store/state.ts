const NOT_FOUND = -1;
const EMPTY = '';

// TODO: naming conventions: interfaces vs models
export interface PlaylistData {
  short: string;
  name: string;
  description: string;
  items: PlaylistItemData[];
}

export interface PlaylistState extends PlaylistData {
  currentItemIndex: number;
}

export const initialState: PlaylistState = {
  short: EMPTY,
  name: EMPTY,
  description: EMPTY,
  items: [], 
  currentItemIndex: NOT_FOUND,
}

export interface PlaylistItemData {
  name: string;
  durationMs: number;
  tags?: {[key: string]: any};
}
