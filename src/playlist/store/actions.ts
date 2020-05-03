export type PlaylistActionType = 'setCurrent' | 'prev' | 'next';
export interface PlaylistAction {
  type: PlaylistActionType;
  payload?: any;
}

export interface PlaylistActionsetCurrent extends PlaylistAction {
  type: 'setCurrent';
  payload: { index: number };
}

export interface PlaylistActionPrev extends PlaylistAction {
  type: 'prev';
}

export interface PlaylistActionNext extends PlaylistAction {
  type: 'next';
}

export type PlaylistActions =
  | PlaylistActionsetCurrent
  | PlaylistActionPrev
  | PlaylistActionNext
  ;

export function isPlaylistActionsetCurrent(action: PlaylistAction): action is PlaylistActionsetCurrent {
  return action.type === 'setCurrent';
}

export function isPlaylistActionPrev(action: PlaylistAction): action is PlaylistActionPrev {
  return action.type === 'prev';
}

export function isPlaylistActionNext(action: PlaylistAction): action is PlaylistActionNext {
  return action.type === 'next';
}