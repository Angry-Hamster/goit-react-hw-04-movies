import React, { Component } from "react";
import { infoCast } from "../../services/usefulApi";

class Cast extends Component {
  state = {
    cast: [],
  };

  componentDidMount() {
    const { moviesId } = this.props.match.params;
    infoCast(moviesId).then((actor) => {
      this.setState({ cast: actor.cast });
    });
  }

  render() {
    const { cast } = this.state;
    return (
      <>
        <ul>
          {cast.map((actor) => {
            return (
              <span key={actor.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
                  alt={`Photo ${actor.name}: this actor`}
                />
                <h3>{actor.name}</h3>
                <h4>{actor.character}</h4>
              </span>
            );
          })}
        </ul>
      </>
    );
  }
}

export default Cast;
