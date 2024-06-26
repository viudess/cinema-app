import {BiSearchAlt2} from "react-icons/bi"

export default function Buscar() {
    return(
        <>
        <form className="flex">
            <input className="text-white placeholder:text-white block bg-[#6100FF] w-56 rounded-l-full py-2 pl-4 pr-3 focus:outline-none" type="search" placeholder="Pesquisar"/>
            <button className="text-[#6100FF] bg-[#00BA61] w-10 pl-3 rounded-r-full" type="submit">
                <BiSearchAlt2 />
            </button>
        </form>
            </>
    )
}