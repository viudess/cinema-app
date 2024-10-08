/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Card({ titulo, genero }) {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const url = genero
      ? `https://api.themoviedb.org/3/discover/movie?api_key=42d3670ecf0c0d4efc8b3afe08333462&with_genres=${genero}`
      : `https://api.themoviedb.org/3/discover/movie?api_key=42d3670ecf0c0d4efc8b3afe08333462`;

    fetch(url)
      .then((response) => response.json())
      .then((response) => setFilmes(response.results))
      .catch((error) => console.log(error));
  }, [genero]);

  return (
    <>
      <h1 className="text-white pl-16 text-5xl font-bold">{titulo}</h1>
      <main className="flex justify-evenly">
        <div className="flex flex-row overflow-x-scroll mt-8 gap-8 pb-6 pl-16">
          {filmes.map((filme) => (
            <Link to={`${filme.id}`} key={filme.id}>
              <div>
                <div className="w-52">
                  <div className="flex justify-center">
                    <img
                      className="rounded-2xl hover:border-4 border-white border-transition duration-100"
                      src={`https://image.tmdb.org/t/p/w1280/${filme.poster_path}`}
                      alt={filme.title}
                    />
                  </div>
                </div>
                <div className="flex justify-center mt-4 text-white text-center text-lg font-medium">
                  <h1 className="size-10/12">{filme.title}</h1>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}

export default function CardsLine() {
  const unidades = [
    { titulo: "Mais populares", genero: null },
    { titulo: "Terror", genero: 27 },
    { titulo: "Ação", genero: 28 },
    { titulo: "Aventura", genero: 12 },
    { titulo: "Comédia", genero: 35 },
    { titulo: "Crimes", genero: 80 },
    { titulo: "Drama", genero: 18 },
    { titulo: "Família", genero: 10751 },
    { titulo: "Romance", genero: 10749 },
    { titulo: "Animação", genero: 16 },
  ];

  return (
    <>
      <div className="flex flex-col mt-14">
        {unidades.map(({ titulo, genero }) => (
          <Card key={titulo} titulo={titulo} genero={genero} />
        ))}
      </div>
    </>
  );
}
