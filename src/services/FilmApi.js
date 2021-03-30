import { ApiService } from './ApiService';

export const FilmApi = {
    getAll: () => ApiService.get(`/movie/popular?api_key=108a3dcad1f9a8ddef8c60eac64385d7`)
};