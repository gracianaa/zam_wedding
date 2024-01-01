import './style.css';
import agenda from './agenda.png';

export const Agenda = () => {
  return (
    <section className="agenda">
      <div id="harmonogram" className="agenda__detail">
        <h2>harmonogram svadobného dňa</h2>
        <img src={agenda} alt="agenda" />
      </div>
    </section>
  );
};
