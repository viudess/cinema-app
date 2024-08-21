import { BiSearchAlt2 } from "react-icons/bi";
import data from "../../articles.json";
import Divisor from "../../public/divisor.png";
import { useState } from "react";

export default function Noticias() {

    const [query, setQuery] = useState("");

    const filteredArticles = data.filter(post => {
        if (query === '') {
            return post;
        } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
            return post;
        }
        return false;
    });

    const noResults = filteredArticles.length === 0 && query !== '';


    return(
        <>
        
        <form className="flex">
            <input
            type="text"
            className="text-white text-5xl placeholder:text-white placeholder:text-5xl block bg-gradient-to-r from-[#6100FF] to-[#00BA61] w-full h-24 pl-16 focus:outline-none"
            placeholder="Pesquise pelo nome do artigo"
            onChange={event => setQuery(event.target.value)}
            />
            <button
            type="submit"
            className="w-2/12 bg-[#6100FF] flex items-center justify-center text-6xl text-white"
            >
            <BiSearchAlt2 />
            </button>
        </form>
                
        <main className="mt-2">
        {noResults ? (
                    <div className='col-span-3 text-center text-xl mt-10 text-white'>
                        <h1>Nenhum Artigo Encontrado</h1>
                    </div>
                ) : (
                filteredArticles.map( (artigo, index) => (
                <div key={index}>
                    <div className="flex justify-center">
                        <img className="w-11/12" src={Divisor} alt="" />
                    </div>
                    <div className="flex justify-center items-center mt-10 mb-10 space-x-6" >
                        <div className="flex justify-center">
                            <img className="size-8/12" src={artigo.image} alt={artigo.image} />
                        </div>
                        <div className="text-white size-6/12 mt-12 mb-10">
                            <h1 className="text-4xl mb-9 font-bold">{artigo.title}</h1>
                            {artigo.text.map( (paragrafo,index) => (
                            <p className="text-xl" key={index}>{paragrafo}</p>
                            ))}
                        </div>
                    </div>
                </div>
                    
                )))
            }
        </main>
        </>
    )
}