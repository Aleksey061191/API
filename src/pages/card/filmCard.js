import React from 'react';
import { useFilmsContext } from '../../context/FilmContext';


const FilmCardPage = () => {
    const { films, selectedFilms, page } = useFilmsContext();
    
    console.log(page)
    return (
    <>
    <img src={'https://image.tmdb.org/t/p/w500/'+selectedFilms.poster_path}></img>
    <h1> {page.title} </h1>
    </>)
}

export { FilmCardPage };