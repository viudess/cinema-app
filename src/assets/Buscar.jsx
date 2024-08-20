import { useState } from "react"
import { BiSearchAlt2 } from "react-icons/bi";
import { useNavigate } from "react-router-dom"

export default function Buscar() {

    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(search) return

        navigate(`/search?q=${search}`);
        setSearch("");
    };

    return(
        <>
        <form className="flex" onSubmit={handleSubmit}>
            <input 
            className="text-white text-5xl placeholder:text-white placeholder:text-5xl block bg-gradient-to-r from-[#6100FF] to-[#00BA61] w-full h-24 pl-16  focus:outline-none" 
            placeholder="Pesquise por título ou gênero"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            />
            <button type="submit" className="w-2/12 bg-[#6100FF] flex items-center justify-center text-6xl text-white">
            <BiSearchAlt2 />
            </button>
        </form>
            </>
    )
}