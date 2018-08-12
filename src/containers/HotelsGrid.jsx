import React from "react";
import Grid from "@material-ui/core/Grid";
import HotelCard from "../components/HotelCard";

const HotelsGrid = props => (
  <Grid container spacing={16}>
    {props.hotels
      .filter(filterHotels(props))
      .sort(sortHotels(props))
      .map(hotel => (
        <Grid item xs={12} sm={6} md={4} key={hotel.name}>
          <HotelCard className='hotel-card' hotel={hotel} nights={props.nights} />
        </Grid>
      ))}
  </Grid>
);

const sortHotels = ({ sort }) => {
  if (!sort) return undefined;
  let orderA = sort.order;
  let orderB = sort.order * -1;
  return (a, b) => a[sort.sortField] > b[sort.sortField] ? orderA : orderB;
}

const filterHotels = ({ query, range }) => {
  return hotel => (
    (!query || hotel.name.concat(hotel.city).toLowerCase().includes(query.toLowerCase()))
    && hotel.price >= range.value);
};

export default HotelsGrid;
