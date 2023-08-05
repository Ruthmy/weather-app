import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import continentsImages from '../assets/bd/continentsImages';
import regionListArray from '../assets/bd/regionList';

import logo from '../assets/img/logo.svg';
import '../styles/Home.css';

const Home = () => {
  const citiesPerContinent = useSelector((state) => state.weather.weather);
  return (
    <>
      <div className="home d-flex-row">
        <img
          className="header"
          src={logo}
          alt="Weather App Logo"
        />
        <div className="home__info">
          <h1 className="title">WEATHER APP</h1>
          <p className="description">
            {citiesPerContinent.length > 0
              ? ` We currently have ${citiesPerContinent.length} cities listed.`
              : ' We currently have no cities listed.'}
          </p>
        </div>
      </div>
      <div className="division"><h2>CONTINENTS</h2></div>
      <div className="continents d-flex-row">
        {regionListArray && regionListArray.map((region) => (
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
