import { Link } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa';

export default function Navbar2() {
    return(
        <>
        <div className="flex justify-around items-center py-5">
                <img src="../../public/logo-otbm.png" alt="" />
                <Link to="../">
                <div className="text-white text-3xl">
                    <FaArrowLeft/>
                </div>
                </Link>
            </div>
        </>
    )
}