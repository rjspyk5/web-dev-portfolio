import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const menu = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-green-500 font-bold" : "font-bold"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <a
          className="hover:text-green-500 duration-700 transition-colors focus:text-green-500"
          href="#about"
        >
          About
        </a>
      </li>
      <li>
        <a
          className="hover:text-green-500 duration-700 transition-colors focus:text-green-500"
          href="#skills"
        >
          Skill
        </a>
      </li>
      <li>
        <a
          className="hover:text-green-500 duration-700 transition-colors focus:text-green-500"
          href="#projects"
        >
          Project
        </a>
      </li>
      <li>
        <a
          className="hover:text-green-500 duration-700 transition-colors focus:text-green-500"
          href="#contact"
        >
          Contact
        </a>
      </li>
      <li>
        <Link
          className="hover:text-green-500 duration-700 transition-colors focus:text-green-500"
          to="#blog"
        >
          Blog
        </Link>
      </li>
    </>
  );
  return (
    <div className="sticky top-0 z-20 backdrop-blur-md md:px-[10%] px-[5%]">
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
          <button className="rounded-md bg-lime-500 font-semibold text-white px-3 py-2 ">
            Hire me
          </button>
        </div>
      </div>
    </div>
  );
};
