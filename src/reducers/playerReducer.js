import { useReducer } from 'react';

const initialState = {
  songToReproduce: [],
  currentPlay: undefined,
};

export const playerActions = {
  LOAD_SONGS: 'LOAD_SONGS',
  ADD_SONG: 'ADD_SONG',
  REPRODUCE_NEXT: 'REPRODUCE_NEXT',
  REPRODUCE_IT_SONG: 'REPRODUCE_IT_SONG',
  START_PLAY: 'START_PLAY',
  PREV_SONG: 'PREV_SONG',
};

const reducer = (state, action) => {
  const newState = { ...state };

  switch (action.type) {
    case playerActions.START_PLAY:
      newState.currentPlay = 0;
      return newState;
    case playerActions.LOAD_SONGS:
      newState.songToReproduce = action.songs;
      return newState;
    case playerActions.ADD_SONG:
      newState.songToReproduce = [...state.songToReproduce, action.song];
      return newState;
    case playerActions.REPRODUCE_NEXT:
      if (state.currentPlay < state.songToReproduce.length) {
        newState.currentPlay = state.currentPlay + 1;
      }
      return newState;
    case playerActions.PREV_SONG:
      if (state.currentPlay >= 0) {
        newState.currentPlay = state.currentPlay - 1;
      }
      return newState;
    case playerActions.REPRODUCE_IT_SONG:
      newState.currentPlay = action.index;
      return newState;
    default:
      return state;
  }
};

export const usePlayerReducer = () => useReducer(reducer, initialState);
