import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FilmApi } from '../../services/FilmApi';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 900,
    },
    image: {
        width: 500,
        height: 500,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

const FilmCardPage = () => {

    const { id } = useParams();
    const [card, setCard] = useState();
    useEffect(() => {
        FilmApi.getOneById(id).then((response) => { setCard(response.data) })

    }, [])
    const classes = useStyles();
    console.log(card)
    return (
        <>
            {card ?
                <>
                    <div className={classes.root}>
                        <Paper className={classes.paper}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <ButtonBase className={classes.image}>
                                        <img className={classes.img} alt="complex" src={'https://image.tmdb.org/t/p/w500/' + card.poster_path} />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography gutterBottom variant="subtitle1">
                                                {card.title}
                                            </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                {card.overview}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                Release date: {card.release_date}
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                                <Button size="small" color="primary" onClick={() => window.location.assign('../')}>
                                                    Back
                                                </Button>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle1">Rating: {card.vote_average}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </div>
                    {/* <h1> {card.title} </h1>
                    <img src={'https://image.tmdb.org/t/p/w500/' + card.poster_path}></img>
                    <p>{card.overview}</p> */}
                </>
                :
                <p>Loading</p>
            }
        </>)
}

export { FilmCardPage };