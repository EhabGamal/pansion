import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import SearchForm from './SearchForm';
import FiltersForm from './FiltersForm';
import SortingForm from './SortingForm';
import HotelsGrid from './HotelsGrid';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.updateState = this.updateState.bind(this);
    this.state = {
      loading: false,
      hotels: [],
      nights: 0,
      filter: {},
      sort: {}
    };
  }

  render() {
    return (
      <Grid container spacing={16} justify={"center"}>
        <Grid item xs={8}>
          <SearchForm onSearch={this.updateState} isLoading={this.setLoadingState} />
        </Grid>
        { this.state.hotels.length !== 0 &&
        <Grid container spacing={16} item xs={12}>
          <Grid item xs={12} md={3}>
            <FiltersForm
              range={this.state.range}
              query={this.state.query}
              onFilter={this.updateState}
            />
          </Grid>
          <Grid container spacing={16} item xs={12} md={9}>
            <Grid item xs={12}>
              <SortingForm onSort={this.updateState} nights={this.state.nights} />
            </Grid>
            <Grid item xs={12}>
              <HotelsGrid
                {...this.state}
              />
            </Grid>
          </Grid>
        </Grid>}
      </Grid>
    );
  }
  updateState(values) {
    this.setState({...values});
  }
}

export default App;
