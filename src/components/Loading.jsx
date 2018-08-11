import React from "react";
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

const LoadingSpinner = () => (
  <Grid container className="flex-grow-1" justify="center" alignItems="center">
    <Grid item>
      <CircularProgress size={50} />
    </Grid>
  </Grid>
);

export default LoadingSpinner;
