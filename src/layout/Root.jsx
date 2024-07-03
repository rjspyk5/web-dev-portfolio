import { Navbar } from "../Shared/Navbar";
import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};
