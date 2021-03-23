import React, { useState } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Collapse from "@material-ui/core/Collapse";
// import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import { AsideMenu } from "../asideMenu/asideMenu";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  menuItemText: {
    textDecoration: "none",
    color: theme.palette.grey[900],
  },
}));

const Link = ({ header, path, icon, subroutes }) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  return (
    <>
      <ListItem button onClick={() => !path && setOpen(!open)}>
        <ListItemIcon>{icon}</ListItemIcon>
        {!!path ? (
          <NavLink to={path} className={classes.menuItemText}>
            {header}
          </NavLink>
        ) : (
          <>
            <ListItemText>{header}</ListItemText>
            {open ? <ExpandLess /> : <ExpandMore />}
          </>
        )}
      </ListItem>
      {!!subroutes && !!subroutes.length && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <AsideMenu links={subroutes} nested />
        </Collapse>
      )}
    </>
  );
};

export { Link };
