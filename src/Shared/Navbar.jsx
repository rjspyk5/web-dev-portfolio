import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const menu = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-primary duration-700 transition-colors focus:text-primary font-bold"
              : "font-bold"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-primary duration-700 transition-colors focus:text-primary font-bold"
              : "hover:text-primary duration-700 transition-colors font-bold"
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/skills"
          className={({ isActive }) =>
            isActive
              ? "text-primary duration-700 transition-colors focus:text-primary font-bold"
              : "hover:text-primary duration-700 transition-colors font-bold"
          }
        >
          {" "}
          Skills
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? "text-primary duration-700 transition-colors focus:text-primary font-bold"
              : "hover:text-primary duration-700 transition-colors font-bold"
          }
        >
          {" "}
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-primary duration-700 transition-colors focus:text-primary font-bold"
              : "hover:text-primary duration-700 transition-colors font-bold"
          }
        >
          {" "}
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive
              ? "text-primary duration-700 transition-colors focus:text-primary font-bold"
              : "hover:text-primary duration-700 transition-colors font-bold"
          }
        >
          {" "}
          Blog
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="sticky top-0 z-20 backdrop-blur-2xl md:px-[10%] px-[5%]">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {menu}
            </ul>
          </div>
          <NavLink className="text-xl font-bold" to="/">
            Rakibul
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menu}</ul>
        </div>
        <div className="navbar-end">
          <button className="rounded-md outline hover:bg-primary outline-primary font-semibold text-white px-3 py-2 ">
            Hire me
          </button>
        </div>
      </div>
    </div>
  );
};
