import { OMDBAgent } from '@/shared/api';
import { MOVIE_TYPE, Movie } from '@/entities/movie/model';
import { MovieAdapter } from '@/entities/movie/lib';

const agent = new OMDBAgent();
const adapter = new MovieAdapter();

export async function getMoviesList(title: string, type?: MOVIE_TYPE): Promise<Movie[]> {
    const { data } = await agent.getMovies(title, type);
    const movieList = data.Search.map((movie) => adapter.toInternalMovie(movie));
    return movieList;
}
