import React from "react";
import createStore from "../../createStore";
import createHistory from "history/createBrowserHistory";
import "reset-css";
import App from "containers/App";

const history = createHistory();
const store = createStore(history);

class ConnectedApp extends React.Component {
  render() {
    return <App store={store} history={history} />;
  }
}

export default ConnectedApp;
