export type PlayerActionType = 'play' | 'pause' | 'stop' | 'prev' | 'next';
export interface PlayerAction {
  type: PlayerActionType;
}

export interface PlayerActionPlay extends PlayerAction {
  type: 'play';
}

export interface PlayerActionPause extends PlayerAction {
  type: 'pause';
}

export interface PlayerActionStop extends PlayerAction {
  type: 'stop';
}

export interface PlayerActionPrev extends PlayerAction {
  type: 'prev';
}

export interface PlayerActionNext extends PlayerAction {
  type: 'next';
}

export type PlayerActions =
  | PlayerActionPlay
  | PlayerActionPause
  | PlayerActionStop
  | PlayerActionPrev
  | PlayerActionNext
  ;

export function isPlayerActionPlay(action: PlayerAction): action is PlayerActionPlay {
  return action.type === 'play';
}

export function isPlayerActionPause(action: PlayerAction): action is PlayerActionPause {
  return action.type === 'pause';
}

export function isPlayerActionStop(action: PlayerAction): action is PlayerActionStop {
  return action.type === 'stop';
}

export function isPlayerActionPrev(action: PlayerAction): action is PlayerActionPrev {
  return action.type === 'prev';
}

export function isPlayerActionNext(action: PlayerAction): action is PlayerActionNext {
  return action.type === 'next';
}