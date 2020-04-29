// https://dev.to/pubudu/build-a-redux-like-store-with-react-context-hooks-8a6
// https://dev.to/stephencweiss/usereducer-with-typescript-2kf
import React, { createContext, Dispatch, useContext, useReducer } from 'react';

export type PlayState = 'playing' | 'paused' | 'stopped';
export type PlayerActionType = 'play' | 'pause' | 'stop' | 'prev' | 'next';
export type PlayerActionDispatchers = { [A in PlayerActionType]: (payload?: any) => void };

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

export interface PlayerState {
  playState: PlayState;
}

export const initialState: PlayerState = {
  playState: 'stopped',
}

export type PlayerReducer = (state: PlayerState, action: PlayerAction) => PlayerState

export const play = (state: PlayerState): PlayerState => {
  return {
    ...state,
    playState: 'playing',
  }
}

export const stop = (state: PlayerState): PlayerState => {
  return {
    ...state,
    playState: 'stopped',
  }
}

export const pause = (state: PlayerState): PlayerState => {
  return {
    ...state,
    playState: 'paused',
  }
}

export const playerReducer: PlayerReducer = (state: PlayerState, action: PlayerAction) => {
  if (isPlayerActionPlay(action)) {
    return play(state);
  }
  if (isPlayerActionPause(action)) {
    return pause(state);
  }
  if (isPlayerActionStop(action)) {
    return stop(state);
  }
  if (isPlayerActionPrev(action)) {
    return state;
  }
  if (isPlayerActionNext(action)) {
    return state;
  }
  return state;
}
