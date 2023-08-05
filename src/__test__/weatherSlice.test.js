import '@testing-library/jest-dom';
import weatherReducer, { initialState, fetchWeather } from '../redux/weather/weatherSlice';

describe('weatherSlice', () => {
  test('Should return the initial state', () => {
    expect(weatherReducer(undefined, {})).toEqual({
      weather: [],
      status: 'idle',
      error: '',
    });
  });
});

describe('weather reducer', () => {
  test('should handle fetchWeather.pending', () => {
    const nextState = weatherReducer(initialState, fetchWeather.pending());
    expect(nextState.status).toEqual('loading');
  });

  test('should handle fetchWeather.fulfilled', () => {
    const mockWeatherData = {
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
    };
    const nextState = weatherReducer(initialState, fetchWeather.fulfilled(mockWeatherData));
    expect(nextState.status).toEqual('succeeded');
    expect(nextState.weather).toEqual(mockWeatherData);
    expect(nextState.error).toBeNull();
  });

  test('should handle fetchWeather.rejected', () => {
    const mockError = 'An error occurred';
    const nextState = weatherReducer(initialState, fetchWeather.rejected({ message: mockError }));
    expect(nextState.status).toEqual('failed');
    expect(nextState.weather).toEqual([]);
    expect(nextState.error).toEqual(mockError);
  });
});
