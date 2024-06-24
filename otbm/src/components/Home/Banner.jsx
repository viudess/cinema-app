import Buscar from "../../assets/Buscar";
import Navbar from "../Navbar";

 export default function Banner() {
    return(
        <>
        <main>
            <div className="flex justify-evenly items-center">
                    <img  className="" src="../../public/logo-otbm.png" alt="" />
                    <Navbar />
                    <Buscar />
            </div>
            <div className="flex-col">
                <div className="flex justify-center">
                    <img className="size-10/12" src="../../public/banner1.png" alt="" />
                </div>
            </div>
        </main>
        </>
    )
}