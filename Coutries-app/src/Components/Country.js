import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function SingleCountry() {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const getSingleCountry = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        const data = await res.json();
        setCountry(data);
      } catch (error) {
        console.error(error);
      }
    };

    getSingleCountry();
  }, [name]);

  //   This is for displaying the counrties name on the address bar
  useEffect(() => {
    document.title = `Countries | ${name}`;
  }, [name]);

  return (
    <>
      <section>
        {country.map((item) => (
          <div key={item.population} className="key">
            <article>
              <img
                className="flags"
                src={item.flags.svg}
                alt={item.name.common}
              />
            </article>

            <article>
              <h1 className="l">{item.name.official}</h1>

              <ul className="country-details">
                <li>Capital: {item.capital[0]}</li>
                <li>Population: {item.population.toLocaleString()}</li>
                <li>Region: {item.region}</li>
                <li>Subregion: {item.subregion}</li>
              </ul>

              {item.borders && (
                <>
                  <h3 className="">Borders:</h3>
                  <ul className="borders">
                    {item.borders.map((border, index) => (
                      <li key={index} className="">
                        {border}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <Link to="/" className="back">
                &#8701; Back
              </Link>
            </article>
          </div>
        ))}
      </section>
    </>
  );
}
