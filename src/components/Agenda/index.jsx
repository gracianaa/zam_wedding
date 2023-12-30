import './style.css';
import agenda from './agenda.png';

export const Agenda = () => {
  return (
    <div id="harmonogram" className="agenda">
      <h2>harmonogram svadobného dňa</h2>
      <img src={agenda} alt="agenda" />
    </div>
  );
};
