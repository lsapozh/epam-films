import { DATA_LOAD_STARTED, FILMS_LOADED, FILM_LOADED } from "./constants";
import { loadMovie, loadMovies } from "api";
import { makeSearchRegex } from "Utils";

export const asyncLoadData = ({ id }) => dispatch => {
  dispatch(dataLoadStarted());

  loadMovie({ id }).then(film => {
    dispatch(filmLoaded({ film }));

    loadMovies({
      findBy: "director",
      value: makeSearchRegex(film.director)
    }).then(films => {
      dispatch(
        filmsLoaded({ films: films.filter(f => f.id !== parseInt(id)) })
      );
    });
  });
};

export const dataLoadStarted = () => ({
  type: DATA_LOAD_STARTED
});

export const filmLoaded = ({ film }) => ({
  type: FILM_LOADED,
  film
});

export const filmsLoaded = ({ films }) => ({
  type: FILMS_LOADED,
  films
});
