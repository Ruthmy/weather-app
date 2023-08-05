import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom';

import App from '../App';

const mockStore = configureStore([]);

describe('App', () => {
  let store;
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

  test('Should have the country send by mock store', () => {
    render(<Provider store={store}><App /></Provider>);
    const citiesListedElement = screen.getByText('We currently have 1 cities listed.');
    const amoutAppearOnScreen = screen.getByText('1');
    const continentImageIsPresent = screen.getByAltText('Asia');
    expect(citiesListedElement).toBeInTheDocument();
    expect(amoutAppearOnScreen).toBeInTheDocument();
    expect(continentImageIsPresent).toBeInTheDocument();
  });

  test('Should have all the continents on screen', () => {
    render(<Provider store={store}><App /></Provider>);
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

  test('renders the App component correctly', () => {
    const { container } = render(<Provider store={store}><App /></Provider>);
    expect(container).toMatchSnapshot();
  });
});
