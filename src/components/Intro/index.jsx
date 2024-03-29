import dayjs from 'dayjs';
import './style.css';
import Countdown from 'react-countdown';
import { Button } from '../Button';

const today = dayjs();
const weddingDay = dayjs('2024-08-10');
const countdown = dayjs(weddingDay).diff(dayjs(today), 'second');

const Completionist = () => (
  <span className="countdown-text">DNES je svadba!</span>
);

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completionist />;
  } else {
    return (
      <div className="countdown-text">
        <div className="units">
          <span>{days}</span>
          <br />
          <span className="unit">dní</span>
        </div>
        <div className="units">
          <span>{hours}</span>
          <br />
          <span className="unit">hodín</span>
        </div>
        <div className="units">
          <span>{minutes}</span>
          <br />
          <span className="unit">minút</span>
        </div>
        <div className="units">
          <span>{seconds}</span>
          <br />
          <span className="unit">sekúnd</span>
        </div>
      </div>
    );
  }
};

export const Intro = () => {
  return (
    <section className="intro">
      <div className="intro-background">
        <div className="intro-background__opacity">
          <h1 className="intro-heading">Budeme sa brať!</h1>
          <Button to={'/ourstory'} type={'primary'}>
            Náš príbeh
          </Button>
        </div>
      </div>
      <div className="countdown">
        <h2>odpočítavanie</h2>
        <Countdown
          className="countdown-timer"
          date={Date.now() + countdown * 1000}
          renderer={renderer}
        ></Countdown>
      </div>
    </section>
  );
};
