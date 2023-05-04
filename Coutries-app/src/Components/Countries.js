import { useState, useEffect } from "react";
import Article from "./Data";

export default function Countries() {
  const [countries, setCountries] = useState([]);

  //   Fetching of data from the API
  useEffect(() => {
    const getCountries = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        const data = await res.json();
        setCountries(data);
      } catch (error) {
        console.error(error);
      }
    };

    getCountries();
  }, []);

  const [searchText, setSearchText] = useState("");
  //   Searching for a country
  async function searchCountry() {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${searchText}`
      );
      const data = await res.json();
      setCountries(data);
    } catch (error) {
      console.error(error);
    }
  }
  function handleSearchCountry(e) {
    e.preventDefault();
    searchCountry();
  }

  //   Filtering the countries according to their region 
  const regions = [
    {
      name: "Europe",
    },
    {
      name: "Asia",
    },
    {
      name: "Africa",
    },
    {
      name: "Oceania",
    },
    {
      name: "Americas",
    },
    {
      name: "Antarctic",
    },
  ];
  async function filterByRegion(region) {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/region/${region}`
      );
      const data = await res.json();
      setCountries(data);
    } catch (error) {
      console.error(error);
    }
  }

  function handleFilterByRegion(e) {
    e.preventDefault();
    filterByRegion();
  }
 

  return (
    <>
      {!countries ? (
        <h1 className="">Loading...</h1>
      ) : (
        <section className="sec">
          {/* form */}
          <div className="">
            <form
              onSubmit={handleSearchCountry}
              autoComplete="off"
              className=""
            >
              <input
                type="text"
                name="search"
                placeholder="Search for a country..."
                required
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="Search"
              />
            </form>

            <form onSubmit={handleFilterByRegion}>
              <select
                name="filter-by-region"
                className="filter"
                value={regions.name}
                onChange={(e) => filterByRegion(e.target.value)}
              >
                {regions.map((region, index) => (
                  <option key={index} value={region.name}>
                    {region.name}
                  </option>
                ))}
              </select>
            </form>
          </div>

          <div className="country">
            {countries.map((country) => (
              <Article key={country.name.common} {...country} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
