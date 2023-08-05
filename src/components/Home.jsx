import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import continentsImages from '../assets/bd/continentsImages';
import continentsListArray from '../assets/bd/continentsList';

import logo from '../assets/img/logo.svg';
import '../styles/Home.css';

const Home = () => {
  // Get the cities per continent from the store to display the number of cities per continent
  const citiesPerContinent = useSelector((state) => state.weather.weather);

  // Search value to filter the continents
  const [searchValue, setSearchValue] = useState('');

  const searchedContinents = continentsListArray.filter(
    (continent) => continent.LocalizedName.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return (
    <>
      <div className="home d-flex-row">
        <img
          className="header"
          src={logo}
          alt="Weather App Logo"
        />
        <div className="home__info d-flex-column">
          <h1 className="title">WEATHER APP</h1>
          <p className="description">
            {citiesPerContinent.length > 0
              ? ` We currently have ${citiesPerContinent.length} cities listed.`
              : ' We currently have no cities listed.'}
          </p>
          <input
            placeholder="Searh a continent"
            className="continentSearch"
            value={searchValue}
            onChange={(event) => {
              setSearchValue(event.target.value);
            }}
          />
        </div>
      </div>

      <div className="division"><h2>CONTINENTS</h2></div>
      <div className="continents d-flex-row">
        {searchedContinents && searchedContinents.map((region) => (
          <NavLink
            to={`/${region.LocalizedName}`}
            className="continents__link d-flex-column"
            key={region.EnglishName}
          >
            <img
              className="continents__image"
              src={continentsImages[region.EnglishName]}
              alt={region.EnglishName}
            />
            <p className="continents__detail">
              {region.EnglishName}
            </p>
            <p className="continents__cities">
              {
                citiesPerContinent.filter(
                  (city) => city.TimeZone.Name.includes(region.LocalizedName),
                ).length
              }
            </p>
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default Home;
