import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./Body";
import Layout from "./Layout";
import Whatever from "./Whatever";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Body />} />
        <Route path="whatever" element={<Whatever />} />
      </Route>
      <Route path="app" element={<App />} />
    </Routes>
  </BrowserRouter>
);
