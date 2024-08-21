import { useState, useEffect } from 'react';

const apiKey = 'd1bef122d48992b960cc79c7306f5c1b';
const urlBase = 'https://api.themoviedb.org/3/movie/';
const urlSearch = 'https://api.themoviedb.org/3/search/movie';

export const useMovie = (id) => {
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        if (id) {
            fetch(`${urlBase}${id}?api_key=${apiKey}&language=pt-BR`)
                .then(response => response.json())
                .then(data => setMovie(data))
                .catch(error => console.error('Error fetching movie:', error));
        }
    }, [id]);

    return movie;
};

export const useMovieSearch = (query) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        if (query) {
            fetch(`${urlSearch}?api_key=${apiKey}&language=pt-BR&query=${query}`)
                .then(response => response.json())
                .then(data => setMovies(data.results || []))
                .catch(error => console.error('Error searching movies:', error));
        }
    }, [query]);

    return movies;
};
