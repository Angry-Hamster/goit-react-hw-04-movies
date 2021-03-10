import React, { Component } from "react";
import { getTrending } from "../services/usefulApi";
import { NavLink } from "react-router-dom";

import s from "./home.Module.css";

class HomePage extends Component {
  state = {
    list: [],
  };

  componentDidMount() {
    getTrending().then((list) => {
      this.setState({ list: list.results });
    });
  }

  render() {
    return (
      <div className={s.main}>
        <h1>Trending today</h1>
        <ul className={s.list}>
          {this.state.list.map((item) => (
            <li key={item.id}>
              <NavLink className={s.link} to={{ pathname: `/movies/${item.id}` }}>
                {item.original_name || item.original_title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default HomePage;
