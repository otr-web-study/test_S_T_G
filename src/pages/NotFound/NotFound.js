import { useNavigate } from 'react-router-dom';

import './NotFound.css';
import Button from '../../components/Button';
import Container from '../../components/Container';
import image from '../../images/death_star.png';

const NotFound = () => {
  const navigate = useNavigate();

  const handleReturnClick = () => {
    navigate(-1);
  }
  return (
    <section className='not-found'>
      <Container>
        <h2 className='not-found__text'>404</h2>
        <img src={image} className='not-found__image' alt='death star' />
        <Button 
          className='button not-found__btn-return'
          onClick={handleReturnClick}>Return</Button>
      </Container>
    </section>
  );
};

export default NotFound;