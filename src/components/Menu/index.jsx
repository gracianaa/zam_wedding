import { MenuItem } from '../MenuItem';
import './style.css';
import { NavLink } from 'react-router-dom';
import eucalypL from './eucalypL.png';
import eucalypR from './eucalypR.png';

export const Menu = () => {
  return (
    <nav className="heading-menu">
      <div className="heading-logo">
        <img className="eucalyptL" src={eucalypL} alt="eucalyptus-left" />
        <NavLink className="heading-text" to="/#home">
          Zuzana & Michal
        </NavLink>
        <img className="eucalyptR" src={eucalypR} alt="eucalyptus-right" />
      </div>
      <div className="menu-items">
        <MenuItem id="/#kedyAkde" text="kedy a kde" />
        <MenuItem id="/#harmonogram" text="harmonogram" />
        <MenuItem id="/#rvsp" text="kontakt" />
      </div>
    </nav>
  );
};
