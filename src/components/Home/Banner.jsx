import Buscar from "../../assets/Buscar";
import Navbar from "../Navbar";
import Logo from "../../../public/logo-otbm.png";
import Banner1 from "../../../public/banner1.png";

 export default function Banner() {
    return(
        <>
        <main>
            <div className="flex justify-evenly items-center">
                    <img  className="" src={Logo} alt="" />
                    <Navbar />
                    <Buscar />
            </div>
            <div className="flex-col">
                <div className="flex justify-center">
                    <img className="size-10/12" src={Banner1} alt="" />
                </div>
            </div>
        </main>
        </>
    )
}