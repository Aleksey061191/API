import { ApiService } from './apiService';

export const FilmApi = {
    getAll: (name) => ApiService.get(`/search/movie?api_key=108a3dcad1f9a8ddef8c60eac64385d7&language=en-US${name ? '&query=' + name : ''}`),
    getOneById: (id) => ApiService.get(`movie/${id}?api_key=108a3dcad1f9a8ddef8c60eac64385d7`)
};