import React, { createContext, useState, useEffect, useContext } from 'react';
import { FilmApi } from '../services/FilmApi';

const FilmContext = createContext();

export const FilmContextProvider = ({ children }) => {

    const [films, setFilms] = useState([]);
    const [selectedFilms, setSelectedFilms] = useState({});
    const page = {};

    useEffect(() => {
        FilmApi.getAll().then(resp => setFilms(resp?.data?.results ?? []))
    }, []);

    const value = {
        films, setSelectedFilms, selectedFilms, page
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