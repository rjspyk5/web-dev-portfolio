import BackToTop from "../components/BackToTop/BackToTop";
import { Footer } from "../Shared/Footer";
import { Navbar } from "../Shared/Navbar";
import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <div>
      <Navbar />
      <div className="md:mx-[10%] mx-[5%]">
        <BackToTop />
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};
