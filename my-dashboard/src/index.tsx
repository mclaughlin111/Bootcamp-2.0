import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App";
import "./index.css";
import { ThemeContextProvider } from "./context/ThemeContextProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./Dashboard/Home";
import { Transactions } from "./Dashboard/Transactions";

import { Admin } from "./Dashboard/Admin";
import { Error } from "./Dashboard/Error";
import { Login } from "./components/Login/Login";
import { AuthProvider } from "./context/AuthContextProvider";
import { ProtectedTransactions } from "./context/ProtectedTransactions";
import { AxiosProvider } from "./context/axiosIntercept/AxiosContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        <AxiosProvider>
          <ThemeContextProvider>
            <App />
          </ThemeContextProvider>
        </AxiosProvider>
      </AuthProvider>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/Transactions",
        element: <ProtectedTransactions />,
      },
      {
        path: "/Admin",
        element: <Admin />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/*",
        element: <Error />,
      },
    ],
  },
]);

root.render(<RouterProvider router={router} />);
