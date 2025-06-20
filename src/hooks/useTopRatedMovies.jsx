import { useQuery } from "@tanstack/react-query";
import api from '../utils/api';

const fetchTopMovies = () => {
    return api.get('/movie/top_rated?language=en-US&page=1')
}

export const useTopRatedMoviesQuery = () => {
    return useQuery({
        queryKey : ['movie-top'],
        queryFn : fetchTopMovies,
        select : (result) => result.data,
    })
}
