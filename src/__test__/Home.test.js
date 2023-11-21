import React from 'react';
import { render, screen } from '@testing-library/react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import '@testing-library/jest-dom';

import Home from '../components/Home';
import Navbar from '../components/Navbar';

// Mocking useDispatch and useSelector
jest.mock('react-redux', () => ({
  useSelector: (selectorFn) => selectorFn(
    {
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
      },
    },
  ),
}));

// Helper function to wrap the component in HashRouter for testing NavLink
const renderWithRouter = (component) => render(
  <HashRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={component} />
    </Routes>
  </HashRouter>,
);

describe('Home component', () => {
  test('Should have the title in the header/home section', () => {
    renderWithRouter(<Home />);
    const titleElement = screen.getByText('WEATHER APP');
    expect(titleElement).toBeInTheDocument();
  });

  test('Should have the subtitle in the header/home section', () => {
    renderWithRouter(<Home />);
    const descriptionElement = screen.getByText('We currently have 1 cities listed.');
    expect(descriptionElement).toBeInTheDocument();
  });

  test('Should have the app logo', () => {
    renderWithRouter(<Home />);
    const logoElement = screen.getByAltText('Weather App Logo');
    expect(logoElement).toBeInTheDocument();
  });

  test('Should have the continents', () => {
    renderWithRouter(<Home />);
    const Africa = screen.getByAltText('Africa');
    const America = screen.getByAltText('America');
    const Asia = screen.getByAltText('Asia');
    const Europe = screen.getByAltText('Europe');
    const Oceania = screen.getByAltText('Oceania');
    expect(Africa).toBeInTheDocument();
    expect(America).toBeInTheDocument();
    expect(Asia).toBeInTheDocument();
    expect(Europe).toBeInTheDocument();
    expect(Oceania).toBeInTheDocument();
  });

  test('Should render correctly', () => {
    const { container } = render(<HashRouter><Home /></HashRouter>);
    expect(container).toMatchSnapshot();
  });
});
