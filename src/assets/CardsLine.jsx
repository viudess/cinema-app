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
        <h1 className="text-white pl-16 text-5xl font-bold">{titulo}</h1>
        <main className="flex justify-evenly">
            <div className="flex flex-row overflow-x-scroll mt-8 gap-8 pb-6 pl-16">
            {
                filmes.map(filme => (
                    <Link to={`${filme.id}`} key={filme.id}>
                        <div>
                            <div className="w-52">
                                <div className="flex justify-center">
                                    <img className="rounded-2xl hover:border-4 border-white border-transition duration-150" src={`https://image.tmdb.org/t/p/w1280/${filme.poster_path}`} alt="" />
                                </div>
                            </div>
                            <div className="flex justify-center mt-4 text-white text-center text-lg font-medium">
                                <h1 className="size-10/12">{filme.title}</h1>
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
        <div className="flex flex-col mt-14">
            {unidade.map(variacao => 
                card(variacao.titulo)
            )}
        </div>
        </>
    )
}