import React, { Component, lazy } from "react";
import { Route, Switch, NavLink, withRouter } from "react-router-dom";
import { getDetails } from "../services/usefulApi";
import routes from "../services/routes";

import MoviePreview from "../components/MoviePrev/MoviePrev";
import s from "./movieDetalis.module.css";

const Cast = lazy(() => import("../components/Cast/Cast"));
const Reviews = lazy(() => import("../components/Reviews/Reviews"));

class MovieDetailsPage extends Component {
  state = {
    id: "",
    name: "",
    title: "",
    genres: [],
    release_date: "",
    overview: "",
    vote_average: 0,
    pics: "",
    original_title: "",
  };

  componentDidMount() {
    const { moviesId } = this.props.match.params;
    getDetails(moviesId).then((data) => {
      this.setState({ ...data });
    });
  }

  handleExit = () => {
    const { location, history } = this.props;
    if (location.state && location.state.from) {
      history.push(location.state.from);
      console.log(location.state.from);
      return;
    }
    history.push(routes.home);
  };

  render() {
    const { handleExit, state } = this;
    return (
      <>
        <div className={s.button_box}>
          <button type="button" onClick={handleExit}>
            Back
          </button>
        </div>

        <div>
          <MoviePreview
            genres={state.genres}
            release_date={state.release_date}
            overview={state.overview}
            vote_average={state.vote_average}
            poster_path={state.poster_path}
            title={state.title}
            original_title={state.original_title}
            name={state.name}
          />
        </div>

        <div className={s.additional_box}>
          <h2>Additional information</h2>

          <NavLink className={s.navLink} to={`${this.props.match.url}/cast`}>Cast</NavLink>

          <NavLink className={s.navLink} to={`${this.props.match.url}/reviews`}>Reviews</NavLink>

          <Switch>
            <Route path={routes.cast} component={Cast} />
            <Route path={routes.reviews} component={Reviews} />
          </Switch>
        </div>
      </>
    );
  }
}
export default withRouter(MovieDetailsPage);
