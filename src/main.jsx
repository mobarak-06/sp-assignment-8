import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Pages/Root/Root";
import Home from "./Pages/Home/Home";
import Error from "./Pages/Error/Error";
import ListedBook from "./Components/ListedBook/ListedBook";
import PageToRead from "./Components/PageToRead/PageToRead";
import BookDetails from "./Components/BookDetails/BookDetails";
import ReadBooks from "./Components/ReadBooks/ReadBooks";
import WishlistBooks from "./Components/WishlistBooks/WishlistBooks";
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/listed book",
        element: <ListedBook></ListedBook>,
        loader : () => fetch('../books.json'),
        children: [
          {
            index: true,
            element: <ReadBooks></ReadBooks>,
          },
          {
            path: "wishlistBook",
            element: <WishlistBooks></WishlistBooks>,
          },
        ],
      },
      {
        path: "/page-to-read",
        loader:() => fetch('/books.json'),
        element: <PageToRead></PageToRead>,
      },
      {
        path: "/book/:id",
        element: <BookDetails></BookDetails>,
        loader: () => fetch(`../books.json`),
        
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
   <Toaster/>

  </React.StrictMode>
);
