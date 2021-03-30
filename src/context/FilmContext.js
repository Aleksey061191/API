import React, { createContext, useState, useEffect, useContext } from 'react';
import { FilmApi } from '../services/FilmApi';

const FilmContext = createContext();

export const FilmContextProvider = ({ children }) => {

    const [films, setFilms] = useState([]);
    const [name, setName] = useState('');

    useEffect(() => {
        FilmApi.getAll().then(resp => setFilms(resp?.data?.results ?? []))
    }, []);

    useEffect(() => {
        FilmApi.getAll(name).then(resp => setFilms(resp?.data?.results ?? []))
    }, [name]);

    const value = {
        films,
        name,
        setName
    }

    return (
        <FilmContext.Provider value={value}>
            {children}
        </FilmContext.Provider>
    );
}

export const useFilmsContext = () => {
    const context = useContext(FilmContext);
    if (!context) {
        throw new Error('To use FilmContext please wrap component with FilmContextProvider')
    }
    return context;
};