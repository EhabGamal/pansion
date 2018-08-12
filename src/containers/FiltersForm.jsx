import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import Slider from '@material-ui/lab/Slider';

const FiltersForm = props => (
  <Paper className="paper">
    <Grid container spacing={24} alignItems="flex-end">
      <Grid item xs={12}>
        <TextField
          label="Search Hotels"
          className="search-query"
          fullWidth
          onChange={e => props.onFilter({ query: e.target.value })}
          InputProps={{
            endAdornment: <InputAdornment position="end"><SearchIcon color="primary" /></InputAdornment>
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography id="sliderLabel">Price per night: {props.range.value} AED</Typography>
        <Slider
          id="slider"
          step={1}
          {...props.range}
          onChange={(e, value) => props.onFilter({ range: { ...props.range, value } })}
          aria-labelledby="sliderLabel"
        />
      </Grid>
    </Grid>
  </Paper>
);

export default FiltersForm;
