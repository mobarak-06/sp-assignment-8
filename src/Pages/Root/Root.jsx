import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";


const Root = () => {
    return (
        <div>
            <div className="md:mx-32">
            <Navbar></Navbar>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;