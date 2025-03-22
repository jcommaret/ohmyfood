import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Root from "./pages/Root";
import Homepage from "./pages/Homepage";
import Restaurant from "./pages/Restaurant";
import ErrorPage from "./pages/Error";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
    ],
  },
  {
    path: "/homepage",
    element: <Homepage />,
  },
  {
    path: "/restaurant/:id",
    element: <Restaurant />,
    errorElement: <ErrorPage />,
  }
]);

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router}></RouterProvider>
    </HelmetProvider>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
