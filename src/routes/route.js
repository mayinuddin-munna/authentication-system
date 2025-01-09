import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../layout/Main";
import Auth from "../pages/Auth";
import ProtectedRoute from "./ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: "/auth",
        element: <Auth />,
      },
      //   {
      //     path: "/sign-up",
      //     element: <SignUp />,
      //   },
    ],
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);
