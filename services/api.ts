// services/api.ts
// This file contains the configuration and functions to interact with the TMDB API

// Default export for the TMDB API configuration
export const TMDB_CONFIG = {
    BASE_URL: 'https://api.themoviedb.org/3', // base URL for the API
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY, // API key for authentication
    headers: {
        accept: 'application/json', // data to accept from the API
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}` // authorization token
        
    }
}

// Fetches movies from the TMDB API based on a search query or fetches popular movies if no query is provided
export const fetchMovies = async ({ query } : { query: string }) => {
    const endpoint = query
        ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`

        : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`; // endpoint to fetch popular movies
    // If a query is provided, use the search endpoint; otherwise, use the discover endpoint

    const response = await fetch(endpoint, { // fetch API to get data from the endpoint
        method: 'GET', // HTTP method to use
        headers: TMDB_CONFIG.headers, // headers to include in the request
    });
    if (!response.ok) {
        // @ts-ignore
        throw new Error(`Error fetching movies: ${response.statusText}`);
    }

    const data = await response.json(); // parse the response data as JSON
    return data.results; // return the list of movies
}

// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTBlOTg5YWU3MTIyNzU2MzdmNDU4NTM2ZDFjMDE3YSIsIm5iZiI6MTc1MTE2MDc1Mi44NDcwMDAxLCJzdWIiOiI2ODYwOTdiMDRmNGRhNjg2OTBhNGQzMmQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.dmlG8iDo3hsDp6_P-jw31hPAZflEGKGUhdc-KVTSxjY'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));