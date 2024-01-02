import './style.css';

export const Footer = () => {
  return (
    <footer id="kontakt" className="footer">
      <div className="footer__bgOpacity">
        <h2 className="footer__heading">kontakt</h2>
        <div className="footer__contactBride contact">
          <h3>Zuzana Hrehová</h3>
          <ul className="contact-list">
            <li>
              email: <a href="mailto:hrehova@gmail.com">hrehova@gmail.com</a>
            </li>
          </ul>
        </div>
        <div className="footer__contactGroom contact">
          <h3>Michal Čuha</h3>
          <ul className="contact-list">
            <li>
              email: <a href="mailto:cuha@gmail.com">cuha@gmail.com</a>
            </li>
          </ul>
        </div>
        <p className="copyright">© website made by Graciána Adamcová</p>
      </div>
    </footer>
  );
};
