import { loadMovies } from "api";
import {
  DATA_LOAD_STARTED,
  FAVORITE_FILMS_LOADED,
  FAVORITE_LIST_LOADED
} from "../constants";
import {
  loadFavoriteFromStorage,
  makeFavoriteListRegExp,
  saveToLocalStorage
} from "Utils";

export const asyncLoadData = () => dispatch => {
  dispatch(dataLoadStarted());

  const favoriteList = loadFavoriteFromStorage();
  dispatch(favoriteListLoaded({ favoriteList }));

  loadMovies({
    findBy: "id",
    value: makeFavoriteListRegExp(favoriteList)
  }).then(films => {
    dispatch(favoriteFilmsLoaded({ films }));
  });
};

export const updateFavoriteList = ({ id, favoriteList }) => dispatch => {
  if (!favoriteList.includes(id)) {
    saveToLocalStorage([...favoriteList, id]);
  } else {
    saveToLocalStorage(favoriteList.filter(f => f !== id));
  }
  dispatch(asyncLoadData());
};

export const dataLoadStarted = () => ({
  type: DATA_LOAD_STARTED
});

export const favoriteListLoaded = ({ favoriteList }) => ({
  type: FAVORITE_LIST_LOADED,
  favoriteList
});

export const favoriteFilmsLoaded = ({ films }) => ({
  type: FAVORITE_FILMS_LOADED,
  films
});
