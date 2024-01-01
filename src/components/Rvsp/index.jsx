import './style.css';

export const Rvsp = () => {
  return (
    <section className="rvsp">
      <div id="rvsp" className="rvsp_ucast">
        <h2>potvrď účasť</h2>
        <form>
          <label>meno a priezvisko/ rodina:</label>
          <input type="text" />
          <label>počet osôb:</label>
          <input type="number" />
          <label>váš email:</label>
          <input type="email" />
        </form>
        <button>odoslať</button>
      </div>
    </section>
  );
};
