import { shallow } from "enzyme/build/index";

jest.mock("api", () => {
  const { films } = require("testData");
  return {
    loadMovies: () => Promise.resolve(films)
  };
});

import React from "react";
import App from "containers/App";
import Film from "components/Film";
import createHistory from "history/createMemoryHistory";
import createStore from "createStore";
import { push } from "react-router-redux";
import api from "api";
import SearchPage from "containers/SearchPage";
import reducer from "../reducer";
import { dataLoaded, asyncLoadData, dataLoadStarted } from "../actions";
import { films } from "testData";
import { DATA_LOAD_STARTED, DATA_LOADED } from "../constants";

function flushPromises() {
  return new Promise(resolve => setImmediate(resolve));
}

describe("SearchPage", async () => {
  describe("rendering", async () => {
    beforeEach(() => {
      localStorage.clear();
    });

    test("render the page", async () => {
      const history = createHistory();
      const store = createStore(history);
      store.dispatch(push("/search?findBy=director&value=tim"));
      const wrapper = mount(<App store={store} history={history} />);
      await flushPromises();
      wrapper.update();
      expect(wrapper.find(Film).length).toBe(2);
    });

    test("change sortBy in state", async () => {
      const history = createHistory();
      const store = createStore(history);
      const wrapper = shallow(
        <SearchPage
          store={store}
          history={history}
          location={{ search: "?findBy=director&value=tim" }}
        />
      ).dive();

      expect(wrapper.state().sortBy).toEqual("year");
      wrapper.instance().changeSortBy("runtime");
      expect(wrapper.state().sortBy).toEqual("runtime");
    });
  });

  describe("reducer", () => {
    test("asyncLoadData", async () => {
      const history = createHistory();
      const store = createStore(history);
      expect(store.getState().searchPage).toEqual({
        isLoading: true,
        films: []
      });
      asyncLoadData({ findBy: "director", value: "tim" })(store.dispatch);
      await flushPromises();
      expect(store.getState().searchPage).toEqual({
        isLoading: false,
        films: films
      });
    });

    test("return the initial state", () => {
      expect(reducer(undefined, { type: undefined })).toEqual({
        isLoading: true,
        films: []
      });
    });

    test("set films", () => {
      expect(reducer(undefined, dataLoaded({ films }))).toEqual({
        isLoading: false,
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

    test("dataLoaded action", () => {
      const expectedAction = {
        type: DATA_LOADED,
        films
      };
      expect(dataLoaded({ films })).toEqual(expectedAction);
    });
  });
});
