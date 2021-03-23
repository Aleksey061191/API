import React from "react";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "../Link/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
    maxWidth: 360 - theme.spacing(4),
  },
}));

const AsideMenu = ({ links, nested }) => {
  const classes = useStyles();

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={`${classes.root} ${nested ? classes.nested : ""}`}
    >
      {links.map((link) => {
        return (
          <Link
            key={link.id}
            subroutes={link.subroutes}
            header={link.header}
            path={link.path}
            icon={link.icon}
          />
        );
      })}
    </List>
  );
};

export { AsideMenu };
