import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Share/NavBar/NavBar";
import Footer from "../Pages/Share/Footer/Footer";

const Main = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;