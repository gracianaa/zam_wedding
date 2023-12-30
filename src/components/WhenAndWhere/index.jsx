import './style.css';
import calendar from './calendar.png';
import weather from './weather.png';

export const WhenAndWhere = () => {
  return (
    <div id="kedyAkde" className="whenAndWhere">
      <h2>kedy a kde</h2>
      <img src={calendar} alt="calendar_icon" width="40px" height="40px" />
      <ul>
        <li>dátum: 10. 08. 2024</li>
        <li>čas: 14:00</li>
        <li>sobáš: kostol v Sabinove</li>
        <li>adresa: Sabinovská 33</li>
        <li>spolu to oslávime: reštaurácia v Sabinove</li>
      </ul>
      <img src={weather} alt="weather_icon" width="40px" height="40px" />
      <ul>
        <li>teplota: 25 C</li>
        <li>dážď: 0</li>
        <li>oblačnosť: 20%</li>
        <li>vietor: 1km/h</li>
      </ul>
    </div>
  );
};
