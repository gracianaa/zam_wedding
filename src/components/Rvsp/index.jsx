import './style.css';

export const Rvsp = () => {
  return (
    <div id="rvsp" className="rvsp">
      <h2>potvrď účasť</h2>
      <form>
        <label>
          meno a priezvisko/ rodina: <input type="text" />
        </label>
        <br />
        <label>
          počet osôb: <input type="number" />
        </label>
        <br />
        <label>
          váš email: <input type="email" />
        </label>
      </form>
      <button>odoslať</button>
    </div>
  );
};
