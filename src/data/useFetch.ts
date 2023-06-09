import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFetch = (URL:string) =>{
    const {isLoading, error, data} = useQuery({
        queryKey : ['lyricsData'],
        queryFn : () => axios(URL)
    })
    return {isLoading,error,data}
}

export default useFetch