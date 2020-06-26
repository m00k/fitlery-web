import { initialState, PlaylistState } from "./state";
import { PlaylistActionType } from "./actions";

export const NOT_FOUND = -1;

export type PlaylistReducerFn = (state: PlaylistState, payload?: any) => PlaylistState;
export type PlaylistReducer = { [A in PlaylistActionType]: PlaylistReducerFn };

const isFirstIndex = (state: PlaylistState): boolean => {
  return state.currentItemIndex === 0;
}

const isLastIndex = (state: PlaylistState): boolean => {
  return state.currentItemIndex >= (state.items.length - 1);
}

const set: PlaylistReducerFn = (_, playlist) => {
  return {
    ...initialState,
    ...playlist,
  }
}

const setCurrentItem: PlaylistReducerFn = (state, index) => {
  return {
    ...state,
    currentItemIndex: index,
  }
}

const prev: PlaylistReducerFn = (state: PlaylistState): PlaylistState => {
  const currentItemIndex = isFirstIndex(state)
    ? 0
    : state.currentItemIndex - 1;
  return {
    ...state,
    currentItemIndex
  };
}

const next: PlaylistReducerFn = (state: PlaylistState): PlaylistState => {
  if (isLastIndex(state)) {
    return state;
  }
  const currentItemIndex = state.currentItemIndex + 1;
  return {
    ...state,
    currentItemIndex
  };
}

export const playlistReducer: PlaylistReducer = {
  set,
  setCurrentItem,
  prev,
  next,
}
