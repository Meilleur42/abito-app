import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/pages/Home/Home';
import Product from './components/pages/Product/Product';
import Layout from './Layout/Layout';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Page404 from './components/pages/Page404/Page404';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/product/:id",
        element: <Product/>,
      },
      
    ]
  },
  {
    path: "*",
    element: <Page404/>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

