import React, { Component } from "react";
import queryString from "query-string";
import { getQuery } from "../services/usefulApi";
import { NavLink } from "react-router-dom";

import s from "./movies.Module.css";

export default class MoviePage extends Component {
  state = {
    results: [],
    value: "",
  };

  componentDidMount() {
    const { value } = this.props.location.search;
    console.log(value);
    const { query } = queryString.parse(this.props.location.search);
    if (query) {
      this.searchMovie(query);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: oldQuery } = queryString.parse(prevProps.location.search);
    const { query: newQuery } = queryString.parse(this.props.location.search);

    if (oldQuery !== newQuery) {
      this.searchMovie(newQuery);
    }
  }

  searchMovie(value) {
    getQuery(value).then((data) => {
      this.setState({ results: data.results });
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.value) {
      return;
    }
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${this.state.value}`,
    });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
    const { value } = this.state;
    return (
      <>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <input
            name="value"
            onChange={this.handleChange}
            value={value}
            autoFocus
          />
          <button type="submit">Search</button>
        </form>

        <ul className={s.list}>
          {this.state.results.map((film) => (
            <li key={film.id}>
              <NavLink
                className={s.link}
                to={{
                  pathname: `/movies/${film.id}`,
                  state: { from: this.props.location },
                }}
              >
                {film.original_name || film.original_title}
              </NavLink>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
