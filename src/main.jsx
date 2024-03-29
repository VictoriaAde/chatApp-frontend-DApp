import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Theme } from "@radix-ui/themes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Register from "./Register.jsx";
import ErrorPage from "./error-page.jsx";
import LoginENS from "./component/LoginENS.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Register />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginENS />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/chat-app",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Theme appearance="dark">
      <RouterProvider router={router} />
      {/* <App /> */}
      <ToastContainer />
    </Theme>{" "}
  </React.StrictMode>
);
