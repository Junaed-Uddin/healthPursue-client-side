import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer.jsx";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
