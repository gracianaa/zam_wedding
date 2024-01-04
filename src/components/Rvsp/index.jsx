import './style.css';
import { Button } from '../Button';

export const Rvsp = () => {
  return (
    <section className="rvsp">
      <div id="rvsp" className="rvsp_ucast">
        <h2>potvrď účasť</h2>
        <form className="rvsp__form">
          <label className="rvsp__label">meno a priezvisko/ rodina:</label>
          <input className="rvsp__input-name" type="text" />

          <label className="rvsp__label">počet osôb:</label>
          <input className="rvsp__input-number" type="number" />

          <label className="rvsp__label">poznámka:</label>
          <input className="rvsp__input-body" type="text" />
        </form>
        <Button>odoslať</Button>
        {/* <iframe
          src="https://forms.gle/xCQyrmaGrgxVF9QR8?embedde``d=true"
          width="640"
          height="685"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading…
        </iframe> */}
      </div>
    </section>
  );
};
