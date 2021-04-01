import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import TextField from '@material-ui/core/TextField';
import { useFilmsContext } from '../../context/FilmContext';
// import MenuIcon from "@material-ui/icons/Menu";


const Header = () => {
    const { name, setName } = useFilmsContext();
    return (
        <AppBar position="static"
            style={
                { position: "fixed",
                alignItems: "center",
                background: "374345" }
            } >
            <Toolbar>
                <IconButton edge="start"
                    color="White"
                    aria-label="menu" >
                    { /* <MenuIcon /> */}
                </IconButton>
                <Typography variant="h6" > Films </Typography>

                {/* <Button color="inherit" > Search </Button> */}
                
            </Toolbar >
        </AppBar>
    )
}

export { Header };