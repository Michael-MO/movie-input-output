import React, { Component } from "react";
import "./MovieList.css";
import MOCK_MOVIES from "./Shared/MockMovies";

class MovieList extends Component {

  callbackMethod = (movie) => {
    this.props.callbackData(movie);
  };

  render() {
    return (
      <div className="MovieList">
        <div className="movie-group">
          <h2>Movie list:</h2>
          <ul className="movies">
            {MOCK_MOVIES.map(movie => {
              return (
                <li onClick={event => this.callbackMethod(movie)}>
                  {movie.Title} ({movie.Year})
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default MovieList;
