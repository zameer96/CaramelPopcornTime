import { movie_list_data } from './fake-data';
import {MOVIE_URL, MOVIES_URL} from './constants'

export async function getMoviesList() {
    const response = await fetch(MOVIES_URL + "?limit=30&sort_by=rating");
    const result = await response.json();
    return result.data.movies
}

