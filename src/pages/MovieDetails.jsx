import { useParams } from "react-router-dom";


const MovieDetails = () => { 

    const { movieId } = useParams();
    console.log(useParams());
    console.log(movieId)

    return (
        <>
            <p> Номер: {movieId} </p>
        </>
    )

};
export default MovieDetails;