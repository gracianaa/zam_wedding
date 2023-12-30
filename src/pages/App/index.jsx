import { Outlet } from 'react-router-dom';
import './style.css';
import { Menu } from '../../components/Menu';

export const App = () => {
  return (
    <div className="container">
      <Menu />
      <Outlet />
    </div>
  );
};
