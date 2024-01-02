import './style.css';
import calendar from './calendar.png';
import weather from './weather.png';
import { Weather } from '../Weather';

export const WhenAndWhere = () => {
  return (
    <section className="whenAndWhere">
      <div id="kedyAkde" className="whenAndWhere__bg">
        <div className="whenAndWhere__bgOpacity">
          <h2>kedy a kde</h2>
          <img src={calendar} alt="calendar_icon" width="40px" height="40px" />
          <div className="info-list__body">
            <ul className="info-list info-list__headings">
              <li>dátum: </li>
              <li>čas: </li>
              <li>sobáš: </li>
              <li>adresa: </li>
              <li>spolu to oslávime: </li>
            </ul>
            <ul className="info-list info-list__detail">
              <li>10-08-2024</li>
              <li>14:00</li>
              <li>kostol v Sabinove</li>
              <li>Sabinovská 33</li>
              <li>reštaurácia v Sabinove</li>
            </ul>
          </div>
          <img src={weather} alt="weather_icon" width="40px" height="40px" />
          <Weather />
        </div>
      </div>
    </section>
  );
};
