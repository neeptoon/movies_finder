import { Movie, MovieDTO } from "@/entities/movie/model";

export class MovieAdapter {

    toInternalMovie(movie: MovieDTO): Movie {
        return {
            imdbID: movie.imdbID,
            poster: movie.Poster,
            title: movie.Title,
            type: movie.Type,
            year: movie.Year,
        };
    }
}
