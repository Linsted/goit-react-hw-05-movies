import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCast } from "Api/Api";
import fallback from "../../imgs/not found.png"


const Cast = () => { 

    

    const [actors, setActors] = useState([]);
    const { movieId } = useParams();
    


    useEffect(() => {
     const fetchActor = async () => {
        
        try {
            const response = await fetchCast(movieId);
        
            setActors(response.data.cast);
        } catch (error) {
            console.log(error);
         };

    };

        fetchActor();

    }, [movieId]);

   
    return (<>
        <ul>{actors.map((actor) => {
            
            const image = `https://image.tmdb.org/t/p/w300/${actor.profile_path}`
           
            return <li key={actor.id}><img src={actor.profile_path !== null ? image : fallback } alt="" /><p>{actor.name}</p></li>} )}</ul>
    
    </>);
};

export default Cast;