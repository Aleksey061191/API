import { Box, Paper, Typography } from "@material-ui/core";
import React from "react";

export const PageLayout = ({ children, title }) => {
  return (
    <Box mt={2}>
      <Typography variant="h2" component="h1" gutterBottom>
        {title}
      </Typography>
      <Box p={5} component={Paper}>
        {children}
      </Box>
    </Box>
  );
};
