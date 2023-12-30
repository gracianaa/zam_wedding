import './style.css';

export const Footer = () => {
  return (
    <div id="kontakt" className="footer">
      <h2>kontakt</h2>
      <h3>Zuzana Hrehová</h3>
      <ul>
        <li>
          email: <a href="mailto:hrehova@gmail.com">hrehova@gmail.com</a>
        </li>
        <li>
          tel: <a href="tel:+421908 555 777">0908 555 777</a>
        </li>
      </ul>
      <h3>Michal Čuha</h3>
      <ul>
        <li>
          email: <a href="mailto:cuha@gmail.com">cuha@gmail.com</a>
        </li>
        <li>
          tel: <a href="tel:+421908 333 777">0908 333 777</a>
        </li>
      </ul>
    </div>
  );
};
