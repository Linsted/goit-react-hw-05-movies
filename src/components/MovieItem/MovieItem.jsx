import { Container } from "./MovieItem.styled";

const MovieItem = ({ movie }) => {


    const image = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;
    const score = movie.vote_average * 10;
 
  

    return (
        <Container>
            <div>
                <button>Go back</button>
                <img src={image} alt="" />
            </div>
            <div>
            <h2> {movie.title}</h2>
            <p>User score: { score.toFixed() }%</p>
            <h3>Overview</h3>
            <p>{ movie.overview}</p>
            <h4>Genres</h4>
            {movie.genres?.length > 0 && movie.genres.map(genre => `${genre.name} `)}
        </div></Container>
    );
};

export default MovieItem