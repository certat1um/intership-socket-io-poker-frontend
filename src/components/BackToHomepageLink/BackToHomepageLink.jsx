import { Link } from 'react-router-dom';
import './BackToHomepageLink.css';

export const BackToHomepageLink = () => {
  const text = '<';
  return (
    <Link to="/" className="backToHomepageLink">
      {text}
    </Link>
  );
};
