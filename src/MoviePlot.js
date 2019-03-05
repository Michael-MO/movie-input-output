import React, { Component } from "react";

class MoviePlot extends Component {
  state = { plot: "" };

  render() {
    return (
      <React.Fragment>
        <h3>Movie Plot:</h3>
        <p>{this.state.plot}</p>
      </React.Fragment>
    );
  }
}

export default MoviePlot;
