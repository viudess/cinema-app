import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';

function card(titulo) {

    const [filmes, setFilmes] = useState([])

    useEffect( () => {

        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=7c572a9f5b3ba776080330d23bb76e1e`)
        .then(response => response.json())
        .then(response => setFilmes(response.results))
        .catch (error => console.log(error))

    },[])

    return(
        <>
        <h1 className="text-white mt-10 pl-10 text-6xl font-bold">{titulo}</h1>
        <main className="flex justify-evenly">
            <div className="flex flex-row overflow-x-scroll mt-5 mb-10 gap-16 pb-6 pl-10">
            {
                filmes.map(filme => (
                    <Link to={`${filme.id}`} key={filme.id}>
                        <div className="mt-5 ">
                            <div className="transition duration-500 bg-[#2c2c2c] flex flex-col rounded-2xl rounded-ee-none hover:bg-purple-900 w-52 h-[22rem]">
                                <div className="flex justify-center mt-5">
                                    <img className="rounded-2xl w-40" src={`https://image.tmdb.org/t/p/w1280/${filme.poster_path}`} alt="" />
                                </div>
                                <div className="flex justify-center items-center my-4 text-white text-center text-lg font-medium">
                                    <h1 className="size-10/12">{filme.title}</h1>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))
            }
            </div>
        
        </main>
        </>
    )
    
}

export default function CardsLine() {
    
    const unidade = [
        {
            titulo: "Mais populares"
        },
        {
            titulo: "Terror"
        },
        {
            titulo: "Ação"
        },
    ]

    return(
        <>
        <div className="flex flex-col">
            {unidade.map(variacao => 
                card(variacao.titulo)
            )}
        </div>
        </>
    )
}