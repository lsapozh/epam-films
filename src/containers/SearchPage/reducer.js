import { DATA_LOAD_STARTED, DATA_LOADED } from "./constants";

export const INITIAL_STATE = {
  isLoading: true,
  films: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DATA_LOAD_STARTED:
      return { ...state, isLoading: true };
    case DATA_LOADED:
      return { ...state, isLoading: false, films: action.films };
    default:
      return state;
  }
};
