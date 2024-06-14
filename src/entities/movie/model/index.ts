export type Movie = {
    title: string,
    year: string,
    imdbID: string,
    type: MOVIE_TYPE,
    poster: string,
}

export const enum MOVIE_TYPE {
    MOVIE = 'movie',
    SERIES = 'series',
    GAME = 'game',
    ALL = 'all',
}

export type MovieDTO = {
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string,
}
