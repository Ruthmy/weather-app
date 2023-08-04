import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';

import continentsImages from '../assets/bd/continentsImages';
import '../styles/Continent.css';

const Continent = () => {
  // Get the countries from the global state
  const countries = useSelector((state) => state.weather.weather);

  const { continent } = useParams();

  const continentCountries = countries.filter(
    (country) => country.TimeZone.Name.includes(continent),
  );

  return (
    <div className="continent">
      <div className="home d-flex-row">
        <img
          className="header"
          src={
            continentsImages[continent]
              ? continentsImages[continent]
              : continentsImages.Oceania
          }
          alt={continent}
        />
        <div className="home__info">
          <h1 className="title">{continent}</h1>
          <p className="description">
            {continentCountries.length}
            &nbsp;cities
          </p>
        </div>
      </div>
      <div className="division">
        <h2>
          LIST OF CITIES IN&nbsp;
          {continent}
        </h2>
      </div>
      <div className="cities">
        {continentCountries && continentCountries.map((city) => (
          <NavLink
            to={`/${continent}/${city.LocalizedName}`}
            className="country__link d-flex-row"
            key={city.EnglishName}
          >
            <div className="country__content d-flex-row">
              <p className="country__detail">
                {city.LocalizedName}
              </p>
              <p className="control">
                {city.Temperature.Metric.Value}
                &nbsp;
                {city.Temperature.Metric.Unit}
                °
              </p>
            </div>
          </NavLink>
        ))}
      </div>

    </div>
  );
};

export default Continent;
