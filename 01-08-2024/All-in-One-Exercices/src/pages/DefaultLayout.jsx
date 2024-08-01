import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";

const DefaultLayout = () => {
  return (
    <>
      <div>
        <NavBar />
        <div>
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};
export default DefaultLayout;
