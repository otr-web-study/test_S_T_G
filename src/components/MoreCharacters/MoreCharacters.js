import Button from '../Button';
import './MoreCharacters.css';
import { useNextPage } from '../../futures/controls/useNextPage';

const MoreCharacters = () => {
  const [handleClick] = useNextPage();

  return (
    <Button 
      className='button btn-more'
      onClick={handleClick}>More...</Button>
  )
}

export default MoreCharacters;