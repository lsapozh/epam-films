jest.mock("api", () => {
  const { films } = require("testData");
  return {
    loadMovies: () => Promise.resolve(films)
  };
});

import { favoriteFilms as reducer } from "../../reducers";
import {
  favoriteListLoaded,
  favoriteFilmsLoaded,
  asyncLoadData,
  dataLoadStarted
} from "actions";
import createStore from "createStore";
import createHistory from "history/createMemoryHistory";
import { films } from "testData";
import {
  DATA_LOAD_STARTED,
  FAVORITE_FILMS_LOADED,
  FAVORITE_LIST_LOADED
} from "../../constants";

function flushPromises() {
  return new Promise(resolve => setImmediate(resolve));
}

describe("common reducer", () => {
  describe("favoriteFilms reducer", () => {
    test("return the initial state", () => {
      expect(reducer(undefined, { type: undefined })).toEqual({
        isLoading: true,
        films: [],
        favoriteList: []
      });
    });

    test("asyncLoadData", async () => {
      const history = createHistory();
      const store = createStore(history);
      expect(store.getState().favoriteFilms).toEqual({
        isLoading: true,
        films: [],
        favoriteList: []
      });
      asyncLoadData()(store.dispatch);
      await flushPromises();
      expect(store.getState().favoriteFilms).toEqual({
        isLoading: false,
        favoriteList: [],
        films
      });
    });

    test("set favoriteList", () => {
      expect(
        reducer(undefined, favoriteListLoaded({ favoriteList: [1, 2, 3] }))
      ).toEqual({
        isLoading: true,
        films: [],
        favoriteList: [1, 2, 3]
      });
    });

    test("set favoriteFilms", () => {
      expect(reducer(undefined, favoriteFilmsLoaded({ films }))).toEqual({
        isLoading: false,
        films: films,
        favoriteList: []
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

    test("favoriteListLoaded action", () => {
      const expectedAction = {
        type: FAVORITE_LIST_LOADED,
        favoriteList: [1, 2, 3]
      };
      expect(favoriteListLoaded({ favoriteList: [1, 2, 3] })).toEqual(
        expectedAction
      );
    });

    test("favoriteListLoaded action", () => {
      const expectedAction = {
        type: FAVORITE_FILMS_LOADED,
        films
      };
      expect(favoriteFilmsLoaded({ films })).toEqual(expectedAction);
    });
  });
});
