import { Outlet } from 'react-router-dom';
import './style.css';
import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';

const scrollToHash = (hash) => {
  if (hash) {
    document.querySelector(hash)?.scrollIntoView();
  }
};

export const App = () => {
  const handleClick = (e) => {
    const hash = e.target.closest('a')?.hash;
    scrollToHash(hash);
  };

  return (
    <div id="home" className="site" onClick={handleClick}>
      <Menu />
      <Outlet />
      <Footer />
    </div>
  );
};
