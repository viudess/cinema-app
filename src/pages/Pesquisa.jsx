import { BiSearchAlt2 } from "react-icons/bi"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Pesquisa() {


    const [filmes, setFilmes] = useState([])
    const [searchInput, setSearchInput] = useState('')
  
    const apiKey = 'api_key=7c572a9f5b3ba776080330d23bb76e1e'
    const urlBase = 'https://api.themoviedb.org/3/movie'
  
    useEffect(() => {
      fetch(`${urlBase}${apiKey}`)
        .then(response => response.json())
        .then(response => {
          setFilmes(response.results)
        })
        .catch(erro => console.log(erro))
    }, [])
  
    const handleInputChange = e => {
      const searchTerm = e.target.value
      setSearchInput(searchTerm)
  
      const resultados = filmes.filter((search) =>
        search.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setFilmes(resultados)
    }
  

    return(
        <>
            <form className="flex">
                <input 
                className="text-white text-5xl placeholder:text-white placeholder:text-5xl block bg-gradient-to-r from-[#6100FF] to-[#00BA61] w-full h-24 pl-16  focus:outline-none" 
                placeholder="Pesquise por título ou gênero"
                value={searchInput}
                onChange={handleInputChange}
                />
                <button type="submit" className="w-2/12 bg-[#6100FF] flex items-center justify-center text-6xl text-white">
                <BiSearchAlt2 />
                </button>
            </form>

            <div className="flex justify-evenly">
            <div className="grid grid-cols-4 mt-10 mb-10 gap-">

            {filmes.length > 0 ? (
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

            )))
          : 
          <div>
            <h1>Nada foi encontrado</h1>
          </div>
          }
            
        
            </div>
        </div>
        </>
    )
}