import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Cards() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=42d3670ecf0c0d4efc8b3afe08333462"
    )
      .then((response) => response.json())
      .then((response) => setFilmes(response.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <main className="flex justify-evenly">
        <div className="grid grid-cols-4 mt-10 mb-10 gap-">
          {filmes.map((filme) => (
            <Link to={`${filme.id}`} key={filme.id}>
              <div className="mt-5 ">
                <div className="flex flex-col">
                  <div className="flex justify-center  mt-5">
                    <img
                      className="rounded-2xl w-52 hover:border-4 border-white border-transition duration-100"
                      src={`https://image.tmdb.org/t/p/w1280/${filme.poster_path}`}
                      alt=""
                    />
                  </div>
                  <div className="flex justify-center my-4 text-white text-center text-lg font-medium">
                    <h1 className="size-10/12">{filme.title}</h1>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
