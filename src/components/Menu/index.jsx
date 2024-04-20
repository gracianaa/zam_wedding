import { MenuItem } from '../MenuItem';
import './style.css';
import { NavLink } from 'react-router-dom';
import eucalypL from './eucalypL.png';
import eucalypR from './eucalypR.png';

export const Menu = () => {
  return (
    <nav className="heading-menu">
      <div className="heading-logo">
        <NavLink className="heading-text" to="/#home">
          Zuzana & Michal
        </NavLink>
      </div>
      <div className="menu-items">
        <MenuItem id="/#kedyAkde" text="kedy a kde" />
        <MenuItem id="/#harmonogram" text="harmonogram" />
        <MenuItem id="/#rvsp" text="napíš nám" />
      </div>
    </nav>
  );
};
