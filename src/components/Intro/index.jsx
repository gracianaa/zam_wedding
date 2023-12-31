import dayjs from 'dayjs';
import './style.css';
import Countdown from 'react-countdown';

const today = dayjs();
const weddingDay = dayjs('2024-08-10');
const countdown = dayjs(weddingDay).diff(dayjs(today), 'second');

const Completionist = () => (
  <span className="countdown-text">DNES je svadba!</span>
);

export const Intro = () => {
  return (
    <section>
      <div className="intro-background">
        <div className="intro-background__opacity">
          <h1 className="intro-heading">Budeme sa brať!</h1>
          <button>Náš príbeh</button>
        </div>
      </div>
      <div className="countdown">
        <h2>odpočítavanie</h2>
        <Countdown
          className="countdown-timer"
          date={Date.now() + countdown * 1000}
        >
          <Completionist />
        </Countdown>
      </div>
    </section>
  );
};
