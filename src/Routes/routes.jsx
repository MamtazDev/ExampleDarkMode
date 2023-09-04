import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <h2></h2> },
      { path: "/tool-2", element: <h2></h2> },
      { path: "/tool-3", element: <h2></h2> },
      { path: "/tool-4", element: <h2></h2> },
      { path: "/tool-5", element: <h2></h2> },
      { path: "/tool-6", element: <h2></h2> },
    ],
  },
]);
