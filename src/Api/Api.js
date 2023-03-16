
import axios from "axios";
export const fetchTrendings = async () => { 
    

 axios.defaults.baseURL = 'https://api.themoviedb.org/3/trending/movie/day';
    const KEY = `b2ef32b4f6ff426002ea648d4ef256a9`;


  const response = await  axios.get('', {
        params: {
            api_key: KEY,
        },
    });  

    
    return response;

};



export const fetchMovieById = async (id) => { 
    

 axios.defaults.baseURL = 'https://api.themoviedb.org/3/movie/';
    const KEY = `b2ef32b4f6ff426002ea648d4ef256a9`;


  const response = await  axios.get(`${id}`, {
        params: {
          api_key: KEY,
            
        },
    });  

    
    return response;

};

export const fetchCast = async (id) => { 
axios.defaults.baseURL = 'https://api.themoviedb.org/3/movie/';
    const KEY = `b2ef32b4f6ff426002ea648d4ef256a9`;


  const response = await  axios.get(`${id}/credits`, {
        params: {
          api_key: KEY,
            
        },
    });  

    
    return response;

};

export const fetchReviewsById = async (id) => { 
axios.defaults.baseURL = 'https://api.themoviedb.org/3/movie/';
    const KEY = `b2ef32b4f6ff426002ea648d4ef256a9`;


  const response = await  axios.get(`${id}/reviews`, {
        params: {
          api_key: KEY,
            
        },
    });  

    
    return response;

};

export const fetchMovieByQuery = async (query) => {
  
    axios.defaults.baseURL = 'https://api.themoviedb.org/3/search/movie';
    const KEY = `b2ef32b4f6ff426002ea648d4ef256a9`;


  const response = await  axios.get(``, {
        params: {
          api_key: KEY,
          language: "en-US",
          query,
          page: 1,
          include_adult: true,
          
            
        },
    });  

    
    return response;
    
};