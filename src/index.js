import React from "react";
import ReactDOM from "react-dom";
import APP from "./APP";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <APP></APP>
  </Provider>,

  document.querySelector("#root")
);
