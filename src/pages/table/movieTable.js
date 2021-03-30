import React from 'react';
import { useFilmsContext } from '../../context/FilmContext';
import {
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableRow,
    TextField,
    Button,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { useState } from 'react';
import { EventSharp } from '@material-ui/icons';

const tableConfig = [
    { header: ''},
    { header: "Название", key: "title", isLink: true },
    { header: "Год", key: "release_date" },
    { header: "Оценка", key: "vote_average" },
];



const TablePage = () => {
    const { films, page, selectedFilms } = useFilmsContext();
    console.log(films);
    
    const handleClick = (e) =>{
        e.preventDefault()
        page = films.id;
        
    }
    
    return (
        <>
            <input/>
            <Table>
                <TableHead>
                    <TableRow>
                        {tableConfig.map((cell) => (
                            <TableCell>{cell.header}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {films.map((item) => {
                        return (
                            <TableRow >
                                {tableConfig.map((cell) =>
                                    <TableCell >
                                        
                                        {cell.header==''?
                                            <img src={'https://image.tmdb.org/t/p/w500/'+ item.poster_path} style={{width: '70px', height: '90px'}}></img>
                                        :
                                        cell.isLink?
                                            <NavLink to={`/card/${item.id}`} onclick={handleClick} >
                                               
                                                {item[cell.key]}
                                                
                                            </NavLink>
                                            :
                                            item[cell.key]
                                            
                                        }
                                    </TableCell>
                                )}
                            </TableRow>
                        );
                    })}
                </TableBody>
                <TableFooter>
                </TableFooter>
            </Table>
        </>
    )
}

export { TablePage };