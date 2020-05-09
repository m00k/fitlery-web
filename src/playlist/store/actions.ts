import { PlaylistData } from "./state";

export type PlaylistActionType = 'set' | 'setCurrentItem' | 'prev' | 'next';
export interface PlaylistAction {
  type: PlaylistActionType;
  payload?: any;
}

export interface PlaylistActionSet extends PlaylistAction {
  type: 'set';
  payload: PlaylistData;
}

export interface PlaylistActionSetCurrentItem extends PlaylistAction {
  type: 'setCurrentItem';
  payload: { index: number };
}

export interface PlaylistActionPrev extends PlaylistAction {
  type: 'prev';
}

export interface PlaylistActionNext extends PlaylistAction {
  type: 'next';
}

export type PlaylistActions =
  | PlaylistActionSetCurrentItem
  | PlaylistActionPrev
  | PlaylistActionNext
  ;

  export function isPlaylistActionSet(action: PlaylistAction): action is PlaylistActionSet {
    return action.type === 'set';
  }

export function isPlaylistActionSetCurrentItem(action: PlaylistAction): action is PlaylistActionSetCurrentItem {
  return action.type === 'setCurrentItem';
}

export function isPlaylistActionPrev(action: PlaylistAction): action is PlaylistActionPrev {
  return action.type === 'prev';
}

export function isPlaylistActionNext(action: PlaylistAction): action is PlaylistActionNext {
  return action.type === 'next';
}