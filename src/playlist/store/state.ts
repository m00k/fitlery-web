import { atom } from "recoil";

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
  id: string;
  name: string;
  durationMs: number;
  tags?: {[key: string]: any};
}

export const playlistAtom = atom({
  key: 'playlistState',
  default: initialState,
});