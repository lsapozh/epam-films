import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import searchPage from "containers/SearchPage/reducer";
import filmPage from "containers/FilmPage/reducer";
import {
  DATA_LOAD_STARTED,
  FAVORITE_LIST_LOADED,
  FAVORITE_FILMS_LOADED
} from "../constants";

const INITIAL_STATE = {
  isLoading: true,
  films: [],
  favoriteList: []
};

export const favoriteFilms = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DATA_LOAD_STARTED:
      return { ...state, isLoading: true };
    case FAVORITE_LIST_LOADED:
      return { ...state, favoriteList: action.favoriteList };
    case FAVORITE_FILMS_LOADED:
      return {
        ...state,
        isLoading: false,
        films: action.films
      };
    default:
      return state;
  }
};

const reducers = combineReducers({
  router: routerReducer,
  searchPage,
  filmPage,
  favoriteFilms
});

export default reducers;
