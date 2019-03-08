import React, { Component } from "react";

class MoviePlot extends Component {
  render() {
    return (
      <React.Fragment>
        <h3>Movie Plot:</h3>
        <p>{this.props.selected.Plot}</p>
      </React.Fragment>
    );
  }
}

export default MoviePlot;
