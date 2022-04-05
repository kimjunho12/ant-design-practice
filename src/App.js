import React from "react";
import { useRoutes } from "react-router";

import Main from "./components/Main";

import "./assets/css/App.css";

export default function App() {
  return useRoutes([{ path: "*", element: <Main /> }]);
}
