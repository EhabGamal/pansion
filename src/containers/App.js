import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import LoadingSpinner from '../components/Loading';
import NoContent from '../components/NoContent';
import SearchForm from './SearchForm';
import FiltersForm from './FiltersForm';
import SortingForm from './SortingForm';
import HotelsGrid from './HotelsGrid';

class App extends Component {
  constructor(props) {
    super(props);
    this.updateState = this.updateState.bind(this);
    this.state = {
      loading: false,
      hotels: null,
      nights: 0,
      filter: {},
      sort: {}
    };
  }

  render() {
    return (
      <Grid id="container" container spacing={16} justify={"flex-start"} direction="column" alignItems="stretch">
        <Grid item>
          <SearchForm onSearch={this.updateState} isLoading={this.setLoadingState} />
        </Grid>
        { !this.state.loading && this.state.hotels && this.state.hotels.length !== 0 &&
        <Grid item>
          <Grid container spacing={16}>
            <Grid item xs={12} md={3}>
              <FiltersForm
                range={this.state.range}
                query={this.state.query}
                onFilter={this.updateState}
              />
            </Grid>
            <Grid item xs={12} md={9}>
              <Grid container spacing={16}>
                <Grid item xs={12}>
                  <SortingForm onSort={this.updateState} nights={this.state.nights} />
                </Grid>
                <Grid item xs={12}>
                  <HotelsGrid
                    {...this.state}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>}
        { !this.state.loading && this.state.hotels && this.state.hotels.length === 0 && <NoContent className="no-content" />}
        { this.state.loading && <LoadingSpinner className="loading-spinner" />}
      </Grid>
    );
  }
  updateState(values) {
    this.setState({...values});
  }
}

export default App;
