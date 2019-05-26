jest.mock("api", () => {
  const { films, film } = require("testData");
  return {
    loadMovies: () => Promise.resolve(films),
    loadMovie: () => Promise.resolve(film)
  };
});

import React from "react";
import App from "containers/App";
import Film from "components/Film";
import FilmDetails from "components/FilmDetails";
import createHistory from "history/createMemoryHistory";
import createStore from "createStore";
import { push } from "react-router-redux";
import api from "api";
import {
  filmLoaded,
  filmsLoaded,
  asyncLoadData,
  dataLoadStarted
} from "../actions";
import reducer from "../reducer";
import { films, film } from "testData";
import { DATA_LOAD_STARTED, FILMS_LOADED, FILM_LOADED } from "../constants";

function flushPromises() {
  return new Promise(resolve => setImmediate(resolve));
}

describe("FilmPage", async () => {
  describe("rendering", async () => {
    beforeEach(() => {
      localStorage.clear();
    });

    test("render the page", async () => {
      const history = createHistory();
      const store = createStore(history);
      store.dispatch(push("/film?id=1"));
      const wrapper = mount(<App store={store} history={history} />);
      await flushPromises();
      wrapper.update();
      expect(wrapper.find(FilmDetails).length).toBe(1);
      expect(wrapper.find(Film).length).toBe(1);
    });
  });

  describe("reducer", () => {
    test("asyncLoadData", async () => {
      const history = createHistory();
      const store = createStore(history);
      expect(store.getState().filmPage).toEqual({
        isLoading: true,
        films: [],
        film: {}
      });
      asyncLoadData({ id: 16 })(store.dispatch);
      await flushPromises();
      expect(store.getState().filmPage).toEqual({
        isLoading: false,
        film,
        films
      });
    });

    test("return the initial state", () => {
      expect(reducer(undefined, { type: undefined })).toEqual({
        isLoading: true,
        films: [],
        film: {}
      });
    });

    test("set film", () => {
      expect(reducer(undefined, filmLoaded({ film }))).toEqual({
        isLoading: true,
        films: [],
        film
      });
    });

    test("set films", () => {
      const state = reducer(undefined, filmLoaded({ film }));
      expect(reducer(state, filmsLoaded({ films }))).toEqual({
        isLoading: false,
        film,
        films
      });
    });
  });

  describe("actions", () => {
    test("dataLoadStarted action", () => {
      const expectedAction = {
        type: DATA_LOAD_STARTED
      };
      expect(dataLoadStarted()).toEqual(expectedAction);
    });

    test("filmsLoaded action", () => {
      const expectedAction = {
        type: FILMS_LOADED,
        films
      };
      expect(filmsLoaded({ films })).toEqual(expectedAction);
    });

    test("filmLoaded action", () => {
      const expectedAction = {
        type: FILM_LOADED,
        film
      };
      expect(filmLoaded({ film })).toEqual(expectedAction);
    });
  });
});
