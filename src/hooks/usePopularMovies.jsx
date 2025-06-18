import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchPopMovies = ()=>{
    return api.get(`/movie/popular`)            
}

export const usePopularMoviesQuery = () => {
    return useQuery({
        queryKey : ['movie-popular'],
        queryFn : fetchPopMovies,
        select : (result) => result.data,
    })
}