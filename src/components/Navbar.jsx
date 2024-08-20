import { BiBook, BiHomeAlt2, BiPhone, BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";


export default function Navbar() {
    return(
        <>
        <div>
            <ul className="flex justify-end flex-row text-white text-2xl font-normal p-6 space-x-10">
                <li className="hover:text-[#00BA61] text-transition duration-300">
                    <Link to ="/"><BiHomeAlt2 /></Link>
                </li>
                <li className="hover:text-[#00BA61] text-transition duration-300">
                    <Link to ="/pesquisa"><BiSearch /></Link>
                </li>
                <li className="hover:text-[#00BA61] text-transition duration-300">
                    <Link to ="/blog"><BiBook /></Link>
                </li>
                <li className="hover:text-[#00BA61] text-transition duration-300">
                    <Link to ="/contacts"><BiPhone /></Link>
                </li>
            </ul>
        </div>
        </>
    )
}