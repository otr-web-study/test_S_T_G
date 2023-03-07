import { useSelector } from 'react-redux';

import { selectControls } from '../../futures/controls/controlsSlice';
import { getFieldName } from '../../utils/apiHelpers';
import CharacterAttribute from '../CharacterAttribute/CharacterAttribute';
import CharacterTags from '../CharacterTags/CharacterTags';
import './CharacterCard.css';

const CharacterCard = ({ card, onClick }) => {
  const { id, name, height, mass, tags} = card;
  const { lang } = useSelector(selectControls);

  return (
    <div className='card' onClick={() => onClick(id)}>
      <h2 className='card__title'>
        {name}
      </h2>
      <div className='card__attributes'>
        <CharacterAttribute 
          value={height} 
          label={getFieldName(lang, 'height')} />
        <CharacterAttribute 
          value={mass} 
          label={getFieldName(lang, 'mass')} />
      </div>
      <CharacterTags tags={tags} />
    </div>
  );
}

export default CharacterCard;