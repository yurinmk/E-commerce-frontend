import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, useHistory } from "react-router-dom";

import store from "./store/store";
import Routes from "./components/routes/Routes";

function App(props) {
  const history = useHistory();
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
