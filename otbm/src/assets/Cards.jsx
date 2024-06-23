import { useEffect, useState } from "react"

const movieURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Cards = () => {
    const [topMovies, setTopMovies] = useState([]);

    const getTopRatedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.jason();

        setTopMovies(data.results);
    };

    useEffect(() => {

        const topRatedURL = `${movieURL}to_rated?${apiKey}`;

        getTopRatedMovies(topRatedURL)

    }, [])

    return(
        <>
            <div>
                {topMovies && topMovies.map((movie) => {
                    <p>{movie.title}</p>
                })}
            </div>
        </>
    )
};

export default Cards