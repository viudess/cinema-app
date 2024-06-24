import Buscar from "../../assets/Buscar"
import Navbar from "../Navbar"

export default function Header3() {
    return(
        <>
           <div className="flex justify-evenly items-center">
                    <img  className="" src="../../public/logo-otbm.png" alt="" />
                    <Navbar />
                    <Buscar />
            </div>
        </>
    )
}