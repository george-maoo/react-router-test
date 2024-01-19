import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import ErrorPage from "./ErrorPage.tsx";
import Profile from "./Profile.tsx";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "profile/:name",
      element: <Profile />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
