import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter} from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from "./redux/store/store";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
const root = ReactDOM.createRoot(document.getElementById("root"));

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );
const store = configureStore({
  reducer: rootReducer,
})
root.render(
  <BrowserRouter>
   <Provider store={store}>
    <App />
  </Provider>,
  </BrowserRouter>
);
