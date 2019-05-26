import React from "react";
import App from "containers/App";
import Searcher from "containers/Searcher";
import NotFoundPage from "containers/NotFoundPage";
import { NoFilmsFound } from "components/NoFilmsFound";
import createHistory from "history/createMemoryHistory";
import createStore from "createStore";
import { push } from "react-router-redux";

describe("App", () => {
  test("render the app", () => {
    const history = createHistory();
    const store = createStore(history);
    store.dispatch(push("/"));
    const wrapper = mount(<App store={store} history={history} />);
    expect(wrapper.find(Searcher).length).toBe(1);
    expect(wrapper.find(NoFilmsFound).length).toBe(1);
  });

  test("render the not found", () => {
    const history = createHistory();
    const store = createStore(history);
    store.dispatch(push("/bla-bla"));
    const wrapper = mount(<App store={store} history={history} />);
    expect(wrapper.find(NotFoundPage).length).toBe(1);
  });
});
