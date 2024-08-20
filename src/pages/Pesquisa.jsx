import { BiSearchAlt2 } from "react-icons/bi";
import Cards from "../assets/Cards";


export default function Pesquisa() {

  return (
    <>
      <form className="flex">
        <input
          type="text"
          className="text-white text-5xl placeholder:text-white placeholder:text-5xl block bg-gradient-to-r from-[#6100FF] to-[#00BA61] w-full h-24 pl-16 focus:outline-none"
          placeholder="Pesquise por título ou gênero"
        />
        <button
          type="submit"
          className="w-2/12 bg-[#6100FF] flex items-center justify-center text-6xl text-white"
        >
          <BiSearchAlt2 />
        </button>
      </form>
      
      <Cards />

    </>
  );
}
