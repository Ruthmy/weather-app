/* eslint-disable no-unused-vars */
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Home.css';
import { useSelector } from 'react-redux';

const Home = () => {
  // Get the continents from the global state
  const continents = useSelector((state) => state.location.location);

  return (
    <>
      <div className="home d-flex-row">
        <img
          className="map"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/1024px-World_map_-_low_resolution.svg.png"
          alt="Mapa Mundi"
        />
        <div>
          <h1 className="title">Countries of the World</h1>
          <h2 className="description">
            Click on a continent to see the countries of that continent.
          </h2>
        </div>
      </div>
      <div className="continents">

        {continents.map((continent) => (
          <NavLink
            to={`/${continent.EnglishName}`}
            className="continent"
            key={continent.EnglishName}
            continent={continent.EnglishName}
          >
            {continent.EnglishName}
          </NavLink>
        ))}

      </div>
    </>
  );
};

export default Home;
