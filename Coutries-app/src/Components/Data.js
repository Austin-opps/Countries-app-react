import React from "react";
import { Link } from "react-router-dom";

export default function Article({
  flags,
  name,
  population,
  region,
  subregion,
}) {
  return (
    <>
      <Link to={`/${name.common}`}>
        <article className="name">
          <img src={flags.svg} alt={`${name.common}`} className="image" />
          <div className="countries">
            <h2 className="countryName">{name.common}</h2>
            <ul className="country-details">
              <li>Population: {population.toLocaleString()}</li>
              <li>Region: {region}</li>
              <li>Subregion: {subregion}</li>
            </ul>
          </div>
        </article>
      </Link>
    </>
  );
}
