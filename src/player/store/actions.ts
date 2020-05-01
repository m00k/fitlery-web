export type PlaylistActionType = 'play' | 'pause' | 'stop' | 'prev' | 'next';
export interface PlaylistAction {
  type: PlaylistActionType;
}

export interface PlaylistActionPlay extends PlaylistAction {
  type: 'play';
}

export interface PlaylistActionPause extends PlaylistAction {
  type: 'pause';
}

export interface PlaylistActionStop extends PlaylistAction {
  type: 'stop';
}

export interface PlaylistActionPrev extends PlaylistAction {
  type: 'prev';
}

export interface PlaylistActionNext extends PlaylistAction {
  type: 'next';
}

export type PlaylistActions =
  | PlaylistActionPlay
  | PlaylistActionPause
  | PlaylistActionStop
  | PlaylistActionPrev
  | PlaylistActionNext
  ;

export function isPlaylistActionPlay(action: PlaylistAction): action is PlaylistActionPlay {
  return action.type === 'play';
}

export function isPlaylistActionPause(action: PlaylistAction): action is PlaylistActionPause {
  return action.type === 'pause';
}

export function isPlaylistActionStop(action: PlaylistAction): action is PlaylistActionStop {
  return action.type === 'pause';
}

export function isPlaylistActionPrev(action: PlaylistAction): action is PlaylistActionPrev {
  return action.type === 'prev';
}

export function isPlaylistActionNext(action: PlaylistAction): action is PlaylistActionNext {
  return action.type === 'next';
}