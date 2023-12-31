import './style.css';

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
        <p>100 dní 43 hodín 15minút 06sekúnd</p>
      </div>
    </section>
  );
};
