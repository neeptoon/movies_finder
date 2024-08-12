import { MOVIE_TYPE, MovieDTO } from '@/entities/movie';
import axios, {AxiosInstance, AxiosResponse} from 'axios';

interface AgentInterface {
    http: AxiosInstance
}

export class OMDBAgent implements AgentInterface {
    http: AxiosInstance = axios.create({
        baseURL: 'http://www.omdbapi.com',
        params: {
            apikey: '136a527'
        }
    });

    getMovies(title: string, type?: MOVIE_TYPE): Promise<AxiosResponse<{Search: MovieDTO[], totalResults: string, Response: string}>> {
        const params = {
            s: title,
            type,
        };
        return this.http.get("", {params});
    }

    getFullMovieInfo(id: string): Promise<AxiosResponse<{Search: MovieDTO[], totalResults: string, Response: string}>> {
        const params = {
            i: id,
            plot: 'full'
        };
        return this.http.get("", {params});
    }
}
