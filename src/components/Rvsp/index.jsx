import './style.css';

export const Rvsp = () => {
  return (
    <section className="rvsp">
      <div id="rvsp" className="rvsp_ucast">
        <h2>potvrď účasť</h2>
        <form className="rvsp__form">
          <label className="rvsp__label">meno a priezvisko/ rodina:</label>
          <input className="rvsp__input" type="text" />

          <label className="rvsp__label">počet osôb:</label>
          <input className="rvsp__input" type="number" />

          <label className="rvsp__label">poznámka:</label>
          <input className="rvsp__input" type="text" />
        </form>
        <button type="submit">odoslať</button>
      </div>
    </section>
  );
};
