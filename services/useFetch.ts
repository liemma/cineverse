// fetchMovies
// fetchMovieDetails

// useFetch hook
// This file contains a generic useFetch hook that can be used to fetch data from any API
import { useEffect, useState } from "react";
// useFetch(fetchMovies)

// generic useFetch hook with fetch function that returns a promise
const useFetch = (fetchFunction: () => Promise<T>, autoFetch = true) => {
    const [data, setData] = useState<T | null>(null); // state to hold the fetched data
    const [loading, setLoading] = useState(false); // state to track loading status
    const [error, setError] = useState<Error | null>(null); // state to hold any error messages

    const fetchData = async () => {
        try{
            setLoading(true);
            setError(null);
            
            // Fetch function passed through props
            const result = await fetchFunction(); // call the fetch function passed as an argument
            
            setData(result);
        }catch (err) {
            // @ts-ignore
            setError(err instanceof Error ? err : new Error("An unexpected error occurred"));
        } finally{
            setLoading(false);
        }    
    } 

    const reset = () => {
        setData(null); // reset data to null
        setLoading(false); // reset loading state to false
        setError(null); // reset error state to null
    }

    useEffect(() => {
        if (autoFetch) {
            fetchData(); // automatically fetch data if autoFetch is true
        }
    }, []);       

    return { data, loading, error, refecth: fetchData, reset };
}

export default useFetch;