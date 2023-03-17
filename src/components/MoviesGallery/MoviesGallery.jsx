import PropTypes from 'prop-types'; 
import { Link, useLocation } from "react-router-dom";

export default function MoviesGallery({ movies }) {
const location = useLocation();
        console.log( movies)
    return (
        <>
            <ul>{movies.map(movie => <li key={movie.id}><Link   to={`/movies/${movie.id}` } state={{ from: location }} ><p>{ movie.title}</p></Link></li> )}</ul>
        </>
    );
};

MoviesGallery.propTypes = {
    movies: PropTypes.array.isRequired,
};