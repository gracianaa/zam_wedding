import './style.css';
import { NavLink } from 'react-router-dom';

export const MenuItem = ({ id, text }) => {
  return (
    <NavLink to={id} className="menu-item">
      {text}
    </NavLink>
  );
};
