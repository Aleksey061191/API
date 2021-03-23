import { Grid } from "@material-ui/core";
import React from "react";
import { WordsList } from "../../features/colorsContext/components/colorsList";
import { AddWord } from "./components/addColorButton";
import { DebounceExample } from "./components/debounceExample";

export const Words = () => {
  return (
    <Grid container>
      <Grid item sm={6}>
        <WordsList />
      </Grid>
      <Grid item sm={6}>
        <DebounceExample />
      </Grid>
      <Grid item xs={12}>
        <AddWord />
      </Grid>
    </Grid>
  );
};
