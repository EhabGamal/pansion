import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import PlaceIcon from "@material-ui/icons/Place";
import { currencyFormatter } from "../utils/formatter";

const HotelCard = props => (
  <Card className="card hotel-card">
    <CardMedia
      className="media hotel-card-media"
      image={`https://loremflickr.com/320/240/${props.hotel.city},city`}
      title="Contemplative Reptile"
    />
    <CardContent>
      <Typography variant="headline" className="hotel-card-name" color="primary">
        {props.hotel.name}
      </Typography>
      <Typography variant="subheading" className="country hotel-card-city" color="secondary" gutterBottom>
        <PlaceIcon fontSize="inherit" />
        {props.hotel.city}
      </Typography>
      <Typography variant="title" className="hotel-card-price">{currencyFormatter(props.hotel.price * props.nights)} AED</Typography>
    </CardContent>
  </Card>
);

export default HotelCard;
