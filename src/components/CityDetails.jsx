import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import weatherIcons from '../assets/bd/weatherIcons';
import '../styles/CityDetails.css';

const CityDetails = () => {
  const { city } = useParams();

  // Get the current conditions from the global state
  const CityDetails = useSelector((state) => state.weather.weather).find(
    (country) => country.TimeZone.Name.includes(city),
  );

  return (
    <div>
      <div className="home d-flex-row">
        <img
          className="header"
          src={weatherIcons[CityDetails.WeatherIcon]}
          alt={CityDetails.WeatherText}
        />
        <div className="home__info">
          <h1 className="title">{city}</h1>
          <p className="description" />
        </div>
      </div>
      <div className="division">
        <h2>
          CURRENT CONDITIONS
        </h2>
      </div>
      {CityDetails && (
        <div className="weather d-flex-column">

          <div className="weather__details d-flex-column">
            <p className="temperature">
              {CityDetails.Temperature.Metric.Value}
              &nbsp;
              {CityDetails.Temperature.Metric.Unit}
              ° |&nbsp;
              {CityDetails.Temperature.Imperial.Value}
              &nbsp;
              {CityDetails.Temperature.Imperial.Unit}
              °
            </p>
            <div className="summary">
              <p className="summaryText">
                {CityDetails.WeatherText}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CityDetails;
