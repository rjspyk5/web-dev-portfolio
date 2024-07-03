import { createBrowserRouter } from "react-router-dom";
import { Root } from "./layout/Root";

export const Routing = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);
