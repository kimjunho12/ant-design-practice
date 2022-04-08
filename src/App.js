import React from "react";
import { useRoutes } from "react-router";

import Main from "./components/Main";
import MyTable from "./components/MyTable";

import "./assets/css/App.css";
import Sample from "./components/Sample";

export default function App() {
  return useRoutes([
    { path: "table", element: <MyTable /> },
    { path: "sample", element: <Sample /> },
    { path: "*", element: <Main /> },
  ]);
}
