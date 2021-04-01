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
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';




const tableConfig = [
    { header: '' },
    { header: "Название", key: "title", isLink: true },
    { header: "Год", key: "release_date" },
    { header: "Оценка", key: "vote_average" },
];

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

  

const TablePage = () => {
    const { films, name, setName } = useFilmsContext();
    console.log(films);

    const classes = useStyles();
    
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

    const filmsPerPage = 5;
    const pagesVisited = (page-1) * filmsPerPage;
    
  
    return (
        <>
            <div style={{padding:"20px", display: "grid"}}>
                <TextField id="outlined-search" label="Search Film" type="search" variant="outlined" size="small"  value={name} onChange={(e) => setName(e.target.value)}>

                </TextField>
            </div>
            <Table>
                <TableHead>
                    <TableRow>
                        {tableConfig.map((cell) => (
                            <TableCell >{cell.header}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {films.slice(pagesVisited, pagesVisited + filmsPerPage).map((item) => {
                        return (
                            <TableRow >
                                {tableConfig.map((cell) =>
                                    <TableCell >

                                        {cell.header === '' ?
                                            <img src={'https://image.tmdb.org/t/p/w500/' + item.poster_path} style={{ width: '70px', height: '90px' }}></img>
                                            :
                                            cell.isLink ?
                                                <NavLink to={`/card/${item.id}`} style ={{textDecoration: "none"}}>

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
            <div className={classes.root} style={{transform: "translateX(40%)"}}>
      <Pagination count={films.length/5} page={page} onChange={handleChange} />
    </div>
        </>
    )
}

export { TablePage };