import React from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DissatisfiedIcon from "@material-ui/icons/SentimentDissatisfied";

const NoContent = () => (
  <Grid container className="flex-grow-1" justify="center" alignItems="center">
    <Grid item>
      <Typography variant="headline" align="center">
        Oops! No hotels found for this date.
      </Typography>
      <Typography variant="headline" align="center">
        Try another dates.
      </Typography>
    </Grid>
  </Grid>
);

export default NoContent;
