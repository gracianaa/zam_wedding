import { useState } from 'react';
import './style.css';
import { useEffect } from 'react';
import dayjs from 'dayjs';

export const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [timeId, setTimeId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://api.open-meteo.com/v1/forecast?latitude=49.1031&longitude=21.0988&current=temperature_2m,rain,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,sunset,uv_index_max,rain_sum&timezone=Europe%2FBerlin',
      );

      const data = await response.json();
      setWeather(data);
      console.log(data);
      data.daily.time.map((date, index) => {
        if (date === '2024-01-10') {
          setTimeId(index);
        }
      });
    };

    fetchData();
  }, []);

  return (
    <div className="info-list__body info-list__bodyWeather">
      <div className="info-list__row">
        <p className="info-list__headings">dátum: </p>
        {weather && (
          <p className="info-list__detail">
            {dayjs(weather.daily.time[timeId]).format('DD-MM-YYYY')}
          </p>
        )}
      </div>

      <div className="info-list__row">
        <p className="info-list__headings">teplota max: </p>
        {weather && (
          <p className="info-list__detail">
            {weather.daily.temperature_2m_max[timeId]}{' '}
            {weather.daily_units.temperature_2m_max}
          </p>
        )}
      </div>

      <div className="info-list__row">
        <p className="info-list__headings">teplota min: </p>
        {weather && (
          <p className="info-list__detail">
            {weather.daily.temperature_2m_min[timeId]}{' '}
            {weather.daily_units.temperature_2m_min}
          </p>
        )}
      </div>

      <div className="info-list__row">
        <p className="info-list__headings">dážď: </p>
        {weather && (
          <p className="info-list__detail">
            {weather.daily.rain_sum[timeId]} {weather.daily_units.rain_sum}
          </p>
        )}
      </div>

      <div className="info-list__row">
        <p className="info-list__headings">západ slnka: </p>
        {weather && (
          <p className="info-list__detail">
            {dayjs(weather.daily.sunset[timeId]).format('HH:mm')}
          </p>
        )}
      </div>
    </div>
  );
};
