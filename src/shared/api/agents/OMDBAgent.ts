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

    getMovies(title: string): Promise<AxiosResponse> {
        const params = {
            s: title
        }
        return this.http.get("", {params})
    }

    getFullMovieInfo(id: string): Promise<AxiosResponse> {
        const params = {
            i: id,
            plot: 'full'
        }
        return this.http.get("", {params})
    }
}
