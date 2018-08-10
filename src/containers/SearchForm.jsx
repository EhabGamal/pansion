import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import DateInput from "../components/DateInput";
import { getHotels } from "../server/server";
import { dateFormatter, msToDays } from "../utils/formatter";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.setDate = this.setDate.bind(this);
    this.searchHotels = this.searchHotels.bind(this);
    this.filterAvailableHotels = this.filterAvailableHotels.bind(this);
    this.state = {
      fromDate: "2020-10-05",
      toDate: "2020-10-15",
      error: false
    };
  }
  render() {
    return (
      <form noValidate>
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} sm={5}>
            <DateInput
              id="fromDate"
              title="From"
              value={this.state.fromDate}
              onChange={this.setDate}
              error={this.state.error}
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <DateInput
              id="toDate"
              title="To"
              value={this.state.toDate}
              onChange={this.setDate}
              error={this.state.error}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <Button
              variant="contained"
              color="primary"
              onClick={this.searchHotels}
              disabled={!(this.state.toDate && this.state.fromDate && !this.state.error)}
            >
              Search
              <SearchIcon />
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }
  searchHotels() {
    let ms = new Date(this.state.toDate) - new Date(this.state.fromDate);
    this.props.isLoading(true);
    getHotels()
      .then(this.filterAvailableHotels)
      .then(hotels => ({ hotels, nights: msToDays(ms) }))
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
  setDate({ target: input }) {
    this.setState(
      { [input.id]: input.value },
      () => this.setState({ error: this.state.fromDate > this.state.toDate })
    );
  };
}

export default SearchForm;
