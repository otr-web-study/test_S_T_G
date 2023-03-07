import { useNavigate } from 'react-router-dom';

import './NotFound.css';
import Button from '../../components/Button';


const NotFound = () => {
  const navigate = useNavigate();

  const handleReturnClick = () => {
    navigate(-1);
  }
  return (
    <section className='not-found'>
      <div className='not-found__container'>
        <Button 
          className='button not-found__btn-return'
          onClick={handleReturnClick}>Return</Button>
      </div>
    </section>
  );
};

export default NotFound;