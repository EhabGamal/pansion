import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import HotelIcon from "@material-ui/icons/Hotel";
import DateInput from "../components/DateInput";
import { getHotels } from "../server/server";
import { dateFormatter, msToDays } from "../utils/formatter";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.setDate = this.setDate.bind(this);
    this.searchHotels = this.searchHotels.bind(this);
    this.filterAvailableHotels = this.filterAvailableHotels.bind(this);
    this.getPriceRange = this.getPriceRange.bind(this);
    this.state = {
      fromDate: "2020-10-05",
      toDate: "2020-10-15",
      error: false
    };
  }

  render() {
    return (
      <form noValidate>
        <Grid container spacing={16} alignContent="center">
          <Grid item xs={12}>
            <Typography variant="headline" color="primary" gutterBottom >
              Welcome to Pansion Hotels.&nbsp;
              <HotelIcon fontSize="inherit" />
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={16} justify="space-evenly">
          <Grid item xs={12} sm={4} md={3}>
            <DateInput
              id="fromDate"
              title="From"
              value={this.state.fromDate}
              onChange={this.setDate}
              error={this.state.error}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <DateInput
              id="toDate"
              title="To"
              value={this.state.toDate}
              onChange={this.setDate}
              error={this.state.error}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={2}>
            <Button
              variant="contained"
              color="primary"
              onClick={this.searchHotels}
              disabled={!(this.state.toDate && this.state.fromDate && !this.state.error)}
            >
              <SearchIcon />
              &nbsp;Search
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }

  searchHotels() {
    let ms = new Date(this.state.toDate) - new Date(this.state.fromDate);
    let nights = msToDays(ms);
    this.props.onSearch({ loading: true });
    getHotels()
      .then(this.filterAvailableHotels)
      .then(this.getPriceRange)
      .then(result => ({ ...result, nights, loading: false }))
      .then(this.props.onSearch);
  };

  filterAvailableHotels({ hotels }) {
    let filterFrom = new Date(this.state.fromDate);
    let filterTo = new Date(this.state.toDate);
    return hotels
      .filter(hotel => hotel.availability
        .filter(availability =>
          dateFormatter(availability.from) <= filterFrom
          && dateFormatter(availability.to) >= filterTo
        ).length
      );
  };

  getPriceRange(hotels) {
    if(hotels.length === 0) return {hotels: []};
    let range = hotels.reduce((acc, val, i) => ({
      min: val.price < acc.min ? val.price : acc.min,
      max: val.price > acc.max ? val.price : acc.max
    }), { min: hotels[0].price, max: hotels[0].price });
    range.min = Math.floor(range.min);
    range.max = Math.floor(range.max);
    range.value = range.min;
    return { hotels, range };
  }

  setDate({ target: input }) {
    this.setState(
      { [input.id]: input.value },
      () => this.setState({ error: this.state.fromDate >= this.state.toDate })
    );
  };
}

export default SearchForm;
