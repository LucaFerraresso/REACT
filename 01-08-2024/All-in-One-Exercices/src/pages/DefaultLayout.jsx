import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";

const DefaultLayout = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <div className="flex-grow">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default DefaultLayout;
