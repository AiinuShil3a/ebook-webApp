import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Homepage";
import GetStarted from "../pages/GetStarted";
import Books from "../pages/Books";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children:[
      {
        path:"/",
        element:<Home />,
      },
      {
        path:"/GetStarted",
        element:<GetStarted />,
      },
      {
        path:"/GetStarted",
        element:<GetStarted />,
      },
      {
        path:"/books",
        element:<Books />,
      },
    ],
  },
]);

export default router;