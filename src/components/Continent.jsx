/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';

import '../styles/Continent.css';

const Continent = () => {
  // Get the continents from the global state
  // const continents = useSelector((state) => state.location.location);
  const { continent } = useParams();
  console.log(continent);

  return (
    <div className="continent">
      <p>Its here</p>
      <div className="home d-flex-row">
        <img
          className="map"
          src=""
          alt="Mapa Mundi"
        />
        <div>
          <h1 className="title">Countries of the World</h1>
          <h2 className="description">
            Click on a continent to see the countries of that continent.
          </h2>
        </div>
      </div>
      {/* {continents.map((continent) => (
        <NavLink
          to={`/${continent.EnglishName}`}
          className="continent"
          key={continent.EnglishName}
        >
          {continent.EnglishName}
        </NavLink>
      ))} */}

    </div>
  );
};

export default Continent;
