import React, { useState } from 'react';
import { useFilmsContext } from '../../context/FilmContext';
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableRow,
    TextField
} from "@material-ui/core";
import { NavLink } from "react-router-dom";




const tableConfig = [
    { header: '' },
    { header: "Название", key: "title", isLink: true },
    { header: "Год", key: "release_date" },
    { header: "Оценка", key: "vote_average" },
];



const TablePage = () => {
    const { films, name, setName } = useFilmsContext();
    console.log(films);



    return (
        <>
            <TextField value={name} onChange={(e) => setName(e.target.value)}>

            </TextField>

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

                                        {cell.header === '' ?
                                            <img src={'https://image.tmdb.org/t/p/w500/' + item.poster_path} style={{ width: '70px', height: '90px' }}></img>
                                            :
                                            cell.isLink ?
                                                <NavLink to={`/card/${item.id}`} >

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