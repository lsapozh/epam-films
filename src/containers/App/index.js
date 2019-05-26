import React from "react";

import { Provider } from "react-redux";
import { Route, Switch } from "react-router";

import { ConnectedRouter } from "react-router-redux";
import "reset-css";
import "../../css/style.css";

import HomePage from "containers/HomePage";
import SearchPage from "containers/SearchPage";
import FilmPage from "containers/FilmPage";
import FavoriteFilmsPage from "containers/FavoriteFilmsPage";
import NotFoundPage from "containers/NotFoundPage";
import { Footer } from "components/UI";

const App = ({ store, history }) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <React.Fragment>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/search" component={SearchPage} />
            <Route path="/film" component={FilmPage} />
            <Route path="/favorite" component={FavoriteFilmsPage} />
            <Route path="" component={NotFoundPage} />
          </Switch>
          <Footer>netflixroulette</Footer>
        </React.Fragment>
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
