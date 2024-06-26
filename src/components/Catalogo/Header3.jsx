import Buscar from "../../assets/Buscar";
import Navbar from "../Navbar";
import Logo from "../../../public/logo-otbm.png";

export default function Header3() {
    return(
        <>
           <div className="flex justify-evenly items-center">
                    <img  className="" src={Logo} alt="" />
                    <Navbar />
                    <Buscar />
            </div>
        </>
    )
}