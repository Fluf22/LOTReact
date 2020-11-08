import { AxiosRequestConfig } from "axios";
import charactersQuery from './characters';
import booksQuery from './books';
import moviesQuery from './movies';

export const axiosCfg: AxiosRequestConfig = {
	method: "GET",
	baseURL: process.env.REACT_APP_API_URL,
	headers: {
		Authorization: "Bearer " + process.env.REACT_APP_API_ACCESS_TOKEN
	}
};

export const useCharacters = () => charactersQuery(axiosCfg);
export const useBooks = () => booksQuery(axiosCfg);
export const useMovies = () => moviesQuery(axiosCfg);
