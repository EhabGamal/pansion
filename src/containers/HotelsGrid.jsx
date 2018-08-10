import React from "react";
import Grid from "@material-ui/core/Grid";
import HotelCard from "../components/HotelCard";

const HotelsGrid = props => (
  <Grid container spacing={16}>
    {props.hotels.map(hotel => (
      <Grid item xs={4} key={hotel.name}>
        <HotelCard hotel={hotel} nights={props.nights} />
      </Grid>
    ))}
  </Grid>
);

export default HotelsGrid;
