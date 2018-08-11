import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import AttachMonyIcon from "@material-ui/icons/AttachMoney";
import SortByAlphaIcon from "@material-ui/icons/SortByAlpha";

class SortingForm extends Component {
  constructor(props) {
    super(props);
    this.changeSort = this.changeSort.bind(this);
    this.state = {
      sortField: null,
      order: 1
    };
  }
  render() {
    return (
      <Paper className="paper">
        <Grid container spacing={24} alignItems="center">
          <Grid item xs={6}>
            <p className='nights'>Total Nights: {this.props.nights}</p>
          </Grid>
          <Grid item>
            <Button
              id="name"
              variant="contained"
              onClick={e => this.changeSort('name')}
              color={this.state.sortField === "name" ? "primary" : "default"}
            >
              <SortByAlphaIcon color="secondary" />
              &nbsp;by name
            </Button>
          </Grid>
          <Grid item>
            <Button
              id="price"
              variant="contained"
              onClick={e => this.changeSort('price')}
              color={this.state.sortField === "price" ? "primary" : "default"}
            >
              <AttachMonyIcon color="secondary" />
              &nbsp;by price
            </Button>
          </Grid>
        </Grid>
      </Paper>
    );
  }
  changeSort(field) {
    let newState = {sortField: field, order: this.state.order};
    newState.order *= this.state.sortField === newState.sortField ? -1 : 1;
    this.setState(
      newState,
      () => this.props.onSort({sort: this.state})
    );
  }
}

export default SortingForm;
