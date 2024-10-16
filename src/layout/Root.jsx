// import BackToTop from "../components/BackToTop/BackToTop";
import { Footer } from "../Shared/Footer";
import { Navbar } from "../Shared/Navbar";
import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <div className="bg-gradient-to-r from-[70%] from-[#0F0715] to-[#040c19] bg-scroll">
      <Navbar />
      <div className="md:mx-[10%] mx-[5%] ">
        {/* <BackToTop /> */}
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};
