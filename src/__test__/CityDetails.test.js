import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom';

import CityDetails from '../components/CityDetails';

const mockStore = configureStore([]);
let store;

// Helper function to wrap the component in MemoryRouter for testing NavLink
const renderWithRouter = (component) => render(
  <Provider store={store}>
    <MemoryRouter initialEntries={['/Asia/Dhaka']}>
      <Routes>
        <Route path="/:continent/:city" element={component} />
      </Routes>
    </MemoryRouter>
  </Provider>,
);

describe('Continent component', () => {
  beforeEach(() => {
    store = mockStore({
      weather: {
        weather: [{
          Key: '28143',
          LocalizedName: 'Dhaka',
          EnglishName: 'Dhaka',
          Country: { ID: 'BD', LocalizedName: 'Bangladesh', EnglishName: 'Bangladesh' },
          TimeZone: {
            Code: 'BDT', Name: 'Asia/Dhaka', GmtOffset: 6, IsDaylightSaving: false, NextOffsetChange: null,
          },
          GeoPosition: { Latitude: 23.7098, Longitude: 90.40711, Elevation: { Metric: { Value: 5, Unit: 'm', UnitType: 5 }, Imperial: { Value: 16, Unit: 'ft', UnitType: 0 } } },
          LocalObservationDateTime: '2023-08-05T08:37:00+06:00',
          EpochTime: 1691203020,
          WeatherText: 'Cloudy',
          WeatherIcon: 7,
          HasPrecipitation: false,
          PrecipitationType: null,
          IsDayTime: true,
          Temperature: { Metric: { Value: 28.5, Unit: 'C', UnitType: 17 }, Imperial: { Value: 83, Unit: 'F', UnitType: 18 } },
          MobileLink: 'http://www.accuweather.com/en/bd/dhaka/28143/current-weather/28143?lang=en-us',
          Link: 'http://www.accuweather.com/en/bd/dhaka/28143/current-weather/28143?lang=en-us',
        }],
        status: 'succeeded',
        error: null,
      },
    });
  });

  test('Should have the city name in the header/home section', () => {
    const { getByText } = renderWithRouter(<CityDetails />);
    const titleElement = getByText('Dhaka');
    expect(titleElement).toBeInTheDocument();
  });

  test('Should have render the division section', () => {
    renderWithRouter(<CityDetails />);
    const divisionElement = screen.getByText('CURRENT CONDITIONS');
    expect(divisionElement).toBeInTheDocument();
  });

  test('Should have the current conditions image', () => {
    renderWithRouter(<CityDetails />);
    const continentImageIsPresent = screen.getByAltText('Cloudy');
    expect(continentImageIsPresent).toBeInTheDocument();
  });

  test('Should have the city Name and its temperature', () => {
    renderWithRouter(<CityDetails />);
    const temperatureIsPresent = screen.getByText('28.5 C° | 83 F°');
    expect(temperatureIsPresent).toBeInTheDocument();
  });

  test('Should render correctly', () => {
    const { container } = renderWithRouter(<CityDetails />);
    expect(container).toMatchSnapshot();
  });
});
