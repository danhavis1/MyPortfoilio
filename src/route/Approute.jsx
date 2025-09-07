import { createBrowserRouter, RouterProvider } from "react-router";
import Rootlayout from "../layout/Rootlayout";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";

export default function Approute() {
  const routes = [
    {
      path: "/",
      element: (
        <>
          {" "}
          <Rootlayout />{" "}
        </>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ];

  const route = createBrowserRouter(routes);

  return <RouterProvider router={route} />;
}
