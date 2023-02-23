import './BackToHomeLink.css';
import { useNavigate } from 'react-router-dom';

export const BackToHomeLink = () => {
  const navigate = useNavigate();
  const goHome = () => navigate('/');

  return (
    <button onClick={goHome} className="backToHomepageLink">
      {'<'}
    </button>
  );
};
