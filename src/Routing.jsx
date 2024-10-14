import { createBrowserRouter } from "react-router-dom";
import { Root } from "./layout/Root";
import { Home } from "./Pages/Home/Home";
import { Contact } from "./components/Contact/Contact";
import { SkillSection } from "./components/SkillSection/SkillSection";
import { ProjectSection } from "./components/ProjectSection/ProjectSection";
import { About } from "./Pages/About/About";
import { Blog } from "./Pages/Blog/Blog";
import { AdminHome } from "./Pages/Admin/AdminHome";
import { AdminRoute } from "./AdminRoute/AdminRoute";

export const Routing = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/skills",
        element: <SkillSection />,
      },
      {
        path: "/projects",
        element: <ProjectSection />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <AdminRoute>
        <AdminHome />
      </AdminRoute>
    ),
  },
]);
