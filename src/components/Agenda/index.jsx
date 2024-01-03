import './style.css';
import agenda from './agenda_zam.png';

export const Agenda = () => {
  return (
    <section className="agenda">
      <div id="harmonogram" className="agenda__detail">
        <h2>harmonogram</h2>
        <h2>svadobného dňa</h2>
        <div className="agenda__img">
          <img src={agenda} alt="agenda" />
        </div>
      </div>
    </section>
  );
};
