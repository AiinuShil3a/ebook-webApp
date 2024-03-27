import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Homepage";
import GetStarted from "../pages/GetStarted";
import Books from "../pages/Books";
import BooksDetail from "../pages/Detail";
import AddBook from "../pages/AddBook";
import Update from "../pages/Update";

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
      {
        path:"/books/:id",
        element:<BooksDetail />,
      },
      {
        path:"/AddBook",
        element:<AddBook />,
      },
      {
        path:"/Update/:id",
        element:<Update />,
      },
    ],
  },
]);

export default router;