import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Homepage";
import GetStarted from "../pages/GetStarted";

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
    ],
  },
]);

export default router;