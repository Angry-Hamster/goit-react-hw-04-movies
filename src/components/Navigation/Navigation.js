import React from "react";
import { Link } from "react-router-dom";
import r from "../../services/routes";

import s from "./Nav.module.css";

const Navigation = () => {
  return (
    <div className={s.main}>
      <Link className={s.link} to={r.home}>
        Home
      </Link>
      <Link className={s.link} to={r.movies}>
        Movies
      </Link>
    </div>
  );
};
export default Navigation;
