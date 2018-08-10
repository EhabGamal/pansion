import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import PlaceIcon from "@material-ui/icons/Place";
import { currencyFormatter } from "../utils/formatter";

const HotelCard = props => (
  <Card className="card">
    <CardMedia
      className="media"
      image={`https://loremflickr.com/320/240/${props.hotel.city},city`}
      title="Contemplative Reptile"
    />
    <CardContent>
      <Typography variant="headline" color="primary">
        {props.hotel.name}
      </Typography>
      <Typography variant="subheading" color="secondary" className="country" gutterBottom>
        <PlaceIcon fontSize="inherit" />
        {props.hotel.city}
      </Typography>
      <Typography variant="title">{currencyFormatter(props.hotel.price * props.nights)} AED</Typography>
    </CardContent>
  </Card>
);

export default HotelCard;