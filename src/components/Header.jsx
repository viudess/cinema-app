import Navbar from "./Navbar";
import Logo from "../../public/logo-otbm.png";

export default function Header() {
    return(
        <>
        <div className="flex justify-start pl-16">
            <main>
                <div className="flex items-center">
                        <img  className="pr-10" src={Logo} alt="" />
                        <Navbar />
                </div>
            </main>
        </div>
            
        </>
    )
}