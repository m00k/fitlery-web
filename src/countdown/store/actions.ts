export type CountdownActionType = 'set' | 'start' | 'stop' | 'pause' | 'reset' | 'tick';

export interface CountdownAction {
  type: CountdownActionType;
  payload?: any;
}

export interface CountdownActionStart extends CountdownAction {
  type: 'start';
}

export interface CountdownActionStop extends CountdownAction {
  type: 'stop';
}

export interface CountdownActionPause extends CountdownAction {
  type: 'pause';
}

export interface CountdownActionSetPayload {
  msLeft: number;
  msTotal: number;
}

export interface CountdownActionSet extends CountdownAction {
  type: 'set';
  payload: CountdownActionSetPayload;
}

export interface CountdownActionReset extends CountdownAction {
  type: 'reset';
}

export interface CountdownActionTick extends CountdownAction {
  type: 'tick';
}

export type CountdownActions =
  | CountdownActionStart
  | CountdownActionStop
  | CountdownActionPause
  | CountdownActionSet
  | CountdownActionReset
  | CountdownActionTick
  ;

export function isCountdownActionStart(action: CountdownAction): action is CountdownActionStart {
  return action.type === 'start';
}

export function isCountdownActionStop(action: CountdownAction): action is CountdownActionStop {
  return action.type === 'stop';
}

export function isCountdownActionPause(action: CountdownAction): action is CountdownActionPause {
  return action.type === 'pause';
}

export function isCountdownActionSet(action: CountdownAction): action is CountdownActionSet {
  return action.type === 'set';
}

export function isCountdownActionReset(action: CountdownAction): action is CountdownActionReset {
  return action.type === 'reset';
}

export function isCountdownActionTick(action: CountdownAction): action is CountdownActionTick {
  return action.type === 'tick';
}