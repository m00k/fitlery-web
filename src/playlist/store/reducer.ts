import { isPlaylistActionNext, isPlaylistActionPrev, isPlaylistActionSet, isPlaylistActionSetCurrentItem, PlaylistAction } from "./actions";
import { PlaylistState } from "./state";

export const NOT_FOUND = -1;

export type PlaylistReducer = (state: PlaylistState, action: PlaylistAction) => PlaylistState

const isFirstIndex = (state: PlaylistState): boolean => {
  return state.currentItemIndex === 0;
}

const isLastIndex = (state: PlaylistState): boolean => {
  return state.currentItemIndex >= (state.items.length - 1);
}

const set = (state: PlaylistState, action: PlaylistAction): PlaylistState => {
  return {
    ...state,
    ...action.payload
  }
}

const setCurrentItem = (state: PlaylistState, action: PlaylistAction): PlaylistState => {
  const { index } = action.payload;
  return {
    ...state,
    currentItemIndex: index,
  }
}

const prev = (state: PlaylistState): PlaylistState => {
  const currentItemIndex = isFirstIndex(state)
    ? 0
    : state.currentItemIndex - 1;
  return {
    ...state,
    currentItemIndex
  };
}

const next = (state: PlaylistState): PlaylistState => {
  if (isLastIndex(state)) {
    return state;
  }
  const currentItemIndex = state.currentItemIndex + 1;
  return {
    ...state,
    currentItemIndex
  };
}

export const playlistReducer: PlaylistReducer = (state: PlaylistState, action: PlaylistAction) => {
  if (isPlaylistActionSet(action)) {
    return set(state, action);
  }
  if (isPlaylistActionSetCurrentItem(action)) {
    return setCurrentItem(state, action);
  }
  if (isPlaylistActionPrev(action)) {
    return prev(state);
  }
  if (isPlaylistActionNext(action)) {
    return next(state);
  }
  return state;
}
