import { Link } from 'react-router-dom';

import Container from '../Container';
import './Greeting.css';
import image from '../../images/banner.png'


const Greeting = () => (
  <section className='greeting'>
    <Container className='container greeting__container'>
      {/* <div className='greeting__info'> */}
        <h1 className='greeting__header'>
          Find all your favorite character
        </h1>
        <p className='greeting__text'>
          You can find out all the information about your favorite characters
        </p>
        <Link to='/characters/' className='greeting__link'>See more...</Link>
      {/* </div> */}
      <img src={image} className='greeting__image' alt='yoda' />
    </Container>
  </section>
);

export default Greeting;