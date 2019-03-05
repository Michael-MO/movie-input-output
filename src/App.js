import React, { Component } from "react";
import MovieImg from "./assets/Image/movie_img.png";
import MOCK_MOVIES from "./Shared/MockMovies";
import MovieList from "./MovieList";
import MoviePoster from "./MoviePoster";

class App extends Component {
  state = {
    movies: MOCK_MOVIES,
    selected: MOCK_MOVIES[0]
  };

  selectedMovie = (movie) => {
    this.setState({ selected: movie });
  };

  render() {
    return (
      <div className="App">
        <div className="jumbotron">
          <h1>
            React Movies <img alt="Movie" src={MovieImg} />{" "}
          </h1>
          This small App demonstrates communication between child-components
          using Input/Output
        </div>
        <MovieList />
        <MoviePoster selected={this.state.selected} />
      </div>
    );
  }
}

export default App;
