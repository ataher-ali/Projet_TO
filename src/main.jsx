import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Pages/Home/Home.jsx';
import ContactUs from './Pages/ContactUs/ContactUs.jsx';
import Error from './Pages/Error/Error.jsx';
import About from './Pages/AboutUs/About.jsx';
import Portfolio from './Pages/Portfolio/Portfolio.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Contact_Us",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/About_Us",
        element: <About></About>,
      },
      {
        path: "/Portfolio",
        element: <Portfolio></Portfolio>,
      }
    ]
  },
  {
    path: "/*",
    element: <Error></Error>,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
