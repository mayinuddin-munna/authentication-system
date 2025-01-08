import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../layout/Main";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      //   },
      //   {
      //     path: "/sign-in",
      //     element: <SignIn />,
      //   },
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
