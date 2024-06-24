import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar2 from "../components/Detalhes/Navbar2";
import Footer from "../components/Footer";
import { FaHeart, FaStar } from 'react-icons/fa';

export default function DetalhesFilme() {
    console.log(useParams())
    const {id} = useParams()

    const [filme, setFilme] = useState({})

    useEffect( () => {

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-BR`)
        .then(response => response.json())
        .then(response => setFilme(response))
        .catch (error => console.log(error))

    },[id])

    return ( 
        <>
        <Navbar2 />
        <main className="flex justify-center">
            <div className="flex size-3/4">
                <img className="w-4/12 mb-10 mr-10 rounded-3xl" src={`https://image.tmdb.org/t/p/w1280/${filme.poster_path}`} alt="" />
                    <div className="text-white">
                        <h1 className="text-5xl font-bold mb-10">{filme.title}</h1>
                        <h2 className="text-3xl font-extrabold mb-5">Sinopse</h2>
                        <p className="text-xl mb-10">{filme.overview}</p>
                        <h2 className="text-2xl font-semibold">Data de lançamento:</h2>
                        <p className="flex items-center text-xl mb-2">{filme.release_date}</p>
                        <h2 className="text-2xl font-semibold">Média dos votos:</h2>
                        <p className="flex items-center text-xl mb-2">{filme.vote_average}<FaStar className="ml-1 text-amber-500" /></p>
                        <h2 className="text-2xl font-semibold">Quantos votaram:</h2>
                        <p className="flex items-center text-xl mb-10">{filme.vote_count}<FaHeart className="ml-1 text-red-900" /></p>
                        
                    </div>
            </div>
                    
                    
            
        </main>
        <Footer />
        </>
     );
}