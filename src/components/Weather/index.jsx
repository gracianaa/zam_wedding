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
    <div className="info-list__body">
      <ul className="info-list info-list__headings">
        <li>dátum dnes: </li>
        <li>maximálna teplota: </li>
        <li>minimálna teplota: </li>
        <li>dážď: </li>
        <li>západ slnka: </li>
      </ul>

      <ul className="info-list info-list__detail">
        {weather && (
          <li>{dayjs(weather.daily.time[timeId]).format('DD-MM-YYYY')}</li>
        )}
        {weather && (
          <li>
            {weather.daily.temperature_2m_max[timeId]}{' '}
            {weather.daily_units.temperature_2m_max}
          </li>
        )}
        {weather && (
          <li>
            {weather.daily.temperature_2m_min[timeId]}{' '}
            {weather.daily_units.temperature_2m_min}
          </li>
        )}
        {weather && (
          <li>
            {weather.daily.rain_sum[timeId]} {weather.daily_units.rain_sum}
          </li>
        )}
        {weather && (
          <li>{dayjs(weather.daily.sunset[timeId]).format('HH:mm')}</li>
        )}
      </ul>
    </div>
  );
};
