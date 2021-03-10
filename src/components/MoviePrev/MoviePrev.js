import React from "react";

import s from "./moviPrev.module.css";

const MoviePrev = ({
  overview,
  name,
  release_date,
  vote_average,
  poster_path,
  title,
  original_title,
  genres,
}) => (
  <div className={s.main}>
    <div className={s.img_box}>
      <img
        src={`https://image.tmdb.org/t/p/w300${poster_path}`}
        alt={title}
      ></img>
    </div>

    <div className={s.content_box}>
      <h1>
        {name || title || original_title} {release_date}
      </h1>

      <p style={{ marginBottom: 15 }}>User source: {parseFloat(vote_average) * 10}% </p>

      <h1>Overview</h1>
      <p style={{ marginBottom: 15 }}>{overview}</p>

      <h1>Genres</h1>
      <ul style={{ fontSize: "20px" }} className="MoviePreviewList">
        {genres.map((genre) => (
          <li key={genre.id}> {genre.name} </li>
        ))}
      </ul>
    </div>
  </div>
);
export default MoviePrev;

