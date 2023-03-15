
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
