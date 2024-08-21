import { BiSearchAlt2 } from "react-icons/bi";
import { useEffect, useState } from "react";
import { useMovieSearch } from "../../movie-service";
import { Link } from "react-router-dom";

export default function Pesquisa() {
  const [searchInput, setSearchInput] = useState("");
  const movies = useMovieSearch(searchInput);
  const [filmes, setFilmes] = useState([])

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  useEffect( () => {

    fetch('https://api.themoviedb.org/3/discover/movie?api_key=42d3670ecf0c0d4efc8b3afe08333462')
    .then(response => response.json())
    .then(response => setFilmes(response.results))
    .catch (error => console.log(error))

},[])

  return (
    <>
      <form className="flex">
        <input
          type="text"
          className="text-white text-5xl placeholder:text-white placeholder:text-5xl block bg-gradient-to-r from-[#6100FF] to-[#00BA61] w-full h-24 pl-16 focus:outline-none"
          placeholder="Pesquise por título ou gênero"
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="w-2/12 bg-[#6100FF] flex items-center justify-center text-6xl text-white"
        >
          <BiSearchAlt2 />
        </button>
      </form>

      <main className="flex justify-evenly">
        <div className="grid grid-cols-4 mt-5 mb-10 ">
          {movies.length > 0 ? (
            movies.map((movies) => (
              <Link to={`${movies.id}`} key={movies.id}>
                <div className="mt-5 ">
                  <div className="flex flex-col">
                    <div className="flex justify-center  mt-5">
                      <img
                        className="rounded-2xl w-52 hover:border-4 border-white border-transition duration-100"
                        src={`https://image.tmdb.org/t/p/w1280/${movies.poster_path}`}
                        alt=""
                      />
                    </div>
                    <div className="flex justify-center my-4 text-white text-center text-lg font-medium">
                      <h1 className="size-10/12">{movies.title}</h1>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <>
              {
                filmes.map(filme => (
                    <Link to={`${filme.id}`} key={filme.id}>
                        <div className="mt-5 ">
                            <div className="flex flex-col">
                                <div className="flex justify-center  mt-5">
                                    <img className="rounded-2xl w-52 hover:border-4 border-white border-transition duration-100" src={`https://image.tmdb.org/t/p/w1280/${filme.poster_path}`} alt="" />
                                </div>
                                <div className="flex justify-center my-4 text-white text-center text-lg font-medium">
                                    <h1 className="size-10/12">{filme.title}</h1>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))
            }
            </>
          )}
        </div>
      </main>
    </>
  );
}
