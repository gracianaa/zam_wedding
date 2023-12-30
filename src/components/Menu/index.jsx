import { MenuItem } from '../MenuItem';
import './style.css';
import { NavLink } from 'react-router-dom';

export const Menu = () => {
  return (
    <nav>
      <NavLink className="heading" to="/#home">
        Zuzana & Michal
      </NavLink>
      <MenuItem id="/#kedyAkde" text="kedy a kde" />
      <MenuItem id="/#harmonogram" text="harmonogram" />
      <MenuItem id="/#rvsp" text="potvrď účasť" />
      <MenuItem id="/#kontakt" text="kontakt" />
    </nav>
  );
};
