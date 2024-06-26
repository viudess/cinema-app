import Navbar from "../Navbar"
import Logo from "../../../public/logo-otbm.png";

export default function Header2() {
    return(
        <>
            <div className="flex justify-around items-center">
                    <img className="size-1/12" src={Logo} alt="" />
                <div>
                    <Navbar />
                </div>
            </div>
        </>
    )
}