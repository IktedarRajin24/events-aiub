import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Main from "./Components/Main/Main.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Components/Login/Login.jsx";
import EventCalendar from "./Components/EventCalendar/EventCalendar.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Login />,
      },
      {
        path: "/calendar",
        element: <EventCalendar />,
        loader: () =>
          fetch("/Data/events.json")
            .then((res) => res.json())
            .then((data) => {
              return data;
            }),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
