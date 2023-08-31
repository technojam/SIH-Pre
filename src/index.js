//index.js

import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Lottie from "./components/Lottie";

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ThemePage from './ThemePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/theme/:themeId",
    element: <ThemePage />,
  }
]);

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Lottie />}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
