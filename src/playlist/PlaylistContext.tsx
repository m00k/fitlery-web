// https://dev.to/pubudu/build-a-redux-like-store-with-react-context-hooks-8a6
// https://dev.to/stephencweiss/usereducer-with-typescript-2kf
import React, { createContext, Dispatch, FunctionComponent, Provider, useContext, useReducer } from 'react';

const NOT_FOUND = -1;

type PlayerState = 'playing' | 'paused' | 'stopped';
type PlaylistActionType = 'play' | 'pause' | 'stop' | 'prev' | 'next';
type PlaylistActionDispatchers = {[A in PlaylistActionType]: (payload?: any) => void};

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

// https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards
// https://dev.to/krumpet/generic-type-guard-in-typescript-258l
// https://dev.to/aexol/typescript-tutorial-infer-keyword-2cn
function isPlaylistActionPlay(action: PlaylistAction): action is PlaylistActionPlay{
  return action.type === 'play';
}

function isPlaylistActionPause(action: PlaylistAction): action is PlaylistActionPause{
  return action.type === 'pause';
}

function isPlaylistActionStop(action: PlaylistAction): action is PlaylistActionStop{
  return action.type === 'stop';
}

function isPlaylistActionPrev(action: PlaylistAction): action is PlaylistActionPrev{
  return action.type === 'prev';
}

function isPlaylistActionNext(action: PlaylistAction): action is PlaylistActionNext{
  return action.type === 'next';
}

interface PlaylistState {
  workoutName: any;
  exercises: any[];
  currentExerciseIndex: any;
  playerState: PlayerState;
}

const initialState: PlaylistState = {
  workoutName: 'n/a',
  exercises: [],
  currentExerciseIndex: NOT_FOUND,
  playerState:'stopped',
}

type PlaylistReducer = (state: PlaylistState, action: PlaylistAction) => PlaylistState

const playlistReducer: PlaylistReducer = (state: PlaylistState, action: PlaylistAction) => {
  if (isPlaylistActionPlay(action)) {
    const currentExerciseIndex = state.currentExerciseIndex > NOT_FOUND
      ? state.currentExerciseIndex
      : 0;
    return { ...state, currentExerciseIndex, playerState: 'playing' }
  }
  
  if (isPlaylistActionPause(action)) {
    return { ...state, playerState: 'paused' }
  }

  if (isPlaylistActionStop(action)) {
    return { ...state, playerState: 'stopped' }
  }

  if (isPlaylistActionPrev(action)) {
    const currentExerciseIndex = state.currentExerciseIndex > 0
      ? state.currentExerciseIndex - 1
      : 0;
    return { ...state, currentExerciseIndex }
  }

  if (isPlaylistActionNext(action)) {
    const currentExerciseIndex = state.currentExerciseIndex < (state.currentExerciseIndex.length - 1)
      ? state.currentExerciseIndex + 1
      : 0;
    return { ...state, currentExerciseIndex }
  }

  return state;
}

const createActionDispatchers = (dispatch: Dispatch<PlaylistAction>): PlaylistActionDispatchers => {
  return {
    play: () => dispatch({type: 'play'}),
    pause: () => dispatch({type: 'pause'}),
    stop: () => dispatch({type: 'stop'}),
    prev: () => dispatch({type: 'prev'}),
    next: () => dispatch({type: 'next'}),
  };
}

const PlaylistContext = createContext<[PlaylistState, PlaylistActionDispatchers]>([initialState, createActionDispatchers(() => { })]);

export const PlaylistProvider: FunctionComponent<Provider<[PlaylistState, Dispatch<PlaylistAction>]>> = ({children}: any) => {
  const [playlist, dispatch] = useReducer<PlaylistReducer>(playlistReducer, initialState);
  const dispatchers: PlaylistActionDispatchers = createActionDispatchers(dispatch);
  return (
    <PlaylistContext.Provider value={[playlist, dispatchers]}>
      {children}
    </PlaylistContext.Provider>
  );
}

export const usePlaylistStore = () => useContext<[PlaylistState, PlaylistActionDispatchers]>(PlaylistContext);

// TODO: possible usage in consumer - context vs. hook
// const PlaylistStore = useContext(PlaylistContext)
// vs.
// make context private and expose via custom hook

// TODO: if hook - [state, dispatch] vs [state, play, pause, stop, ...]