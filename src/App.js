import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";

import Header from "./components/Header";
import history from "./config/history";
import GlobalStyle from "./globalStyle";
import Routes from "./routes";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Router history={history}>
        <Header />
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
