import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import GlobalStyle from "./globalStyle";
import Routes from "./routes";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <GlobalStyle />
        <BrowserRouter>
          <Header />
          <Routes />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
