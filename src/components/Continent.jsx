import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';

import continentsImages from '../assets/bd/continentsImages';
import '../styles/Continent.css';

const Continent = () => {
  const { continent } = useParams();

  // Get the countries from the global state
  const continentCountries = useSelector((state) => state.weather.weather).filter(
    (country) => country.TimeZone.Name.includes(continent),
  );

  return (
    <div>
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
      <div>
        {continentCountries && continentCountries.map((city) => (
          <NavLink
            to={`/${continent}/${city.LocalizedName}`}
            className="cities__link d-flex-row"
            key={city.EnglishName}
          >
            <div className="cities__content d-flex-row">
              <p>
                {city.LocalizedName}
              </p>
              <p>
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
