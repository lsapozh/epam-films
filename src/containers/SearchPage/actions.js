import { DATA_LOAD_STARTED, DATA_LOADED } from "./constants";
import { loadMovies } from "api";

export const asyncLoadData = ({ findBy, value, sortBy }) => dispatch => {
  dispatch(dataLoadStarted());
  if (value.length === 0) {
    dispatch(dataLoaded({ films: [] }));
  } else {
    loadMovies({ findBy, value, sortBy }).then(films => {
      dispatch(dataLoaded({ films }));
    });
  }
};

export const dataLoadStarted = () => ({
  type: DATA_LOAD_STARTED
});

export const dataLoaded = ({ films }) => ({
  type: DATA_LOADED,
  films
});
