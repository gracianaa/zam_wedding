import './style.css';
import calendar from './calendar.png';
import weather from './weather.png';
import { Weather } from '../Weather';
import map from './maps.png';
import { Calendar } from '../Calendar';

export const WhenAndWhere = () => {
  return (
    <section className="whenAndWhere">
      <div id="kedyAkde" className="whenAndWhere__bg">
        <div className="whenAndWhere__bgOpacity">
          <h2 className="whenAndWhere__heading">kedy a kde</h2>
          <div className="whenAndWhere__calendar">
            <img
              src={calendar}
              alt="calendar_icon"
              width="40px"
              height="40px"
            />
            <h4>
              <em>miesto, dátum a čas</em>
            </h4>
            <Calendar />
          </div>
          <div className="whenAndWhere__weather">
            <img src={weather} alt="weather_icon" width="40px" height="40px" />
            <h4>
              <em>predpoveď počasia v Sabinove</em>
            </h4>
            <Weather />
          </div>
          <div className="whenAndWhere__map">
            <img src={map} alt="mapa_sabinov" />
          </div>
        </div>
      </div>
    </section>
  );
};
