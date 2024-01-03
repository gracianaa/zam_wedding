import './style.css';
import { Link } from 'react-router-dom';

export const Button = ({ children, type, to }) => {
  const className = `button ${
    type === 'primary' ? 'button--primary' : 'button--secondary'
  }`;

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};
