import { MenuItem } from '../MenuItem';
import './style.css';
import { NavLink } from 'react-router-dom';

export const Menu = () => {
  return (
    <nav>
      <NavLink className="heading" to="home">
        Zuzana & Michal
      </NavLink>
      <MenuItem text="kedy a kde" />
      <MenuItem text="harmonogram" />
      <MenuItem text="potvrď účasť" />
      <MenuItem text="kontakt" />
    </nav>
  );
};
