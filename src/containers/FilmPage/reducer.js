import { DATA_LOAD_STARTED, FILMS_LOADED, FILM_LOADED } from "./constants";

const INITIAL_STATE = {
  isLoading: true,
  films: [],
  film: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DATA_LOAD_STARTED:
      return { ...state, isLoading: true };
    case FILMS_LOADED:
      return { ...state, isLoading: false, films: action.films };
    case FILM_LOADED:
      return { ...state, film: action.film };
    default:
      return state;
  }
};
