import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import router from './routes/Router.jsx';
import './index.css';
import AuthContextProvider from './context/UserContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>

  <RouterProvider router={router} />
  </AuthContextProvider>

)
