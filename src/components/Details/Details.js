import { useSelector } from 'react-redux';

import { selectCharacterById } from '../../futures/characters/charactersSlice';
import { selectControls } from '../../futures/controls/controlsSlice';
import { getFieldName, getGender } from '../../utils/apiHelpers';
import CharacterAttribute from '../CharacterAttribute/CharacterAttribute';
import CharacterTags from '../CharacterTags/CharacterTags';
import './Details.css';

const genderClasses = {
  male: 'details__avatar-container_type_male',
  female: 'details__avatar-container_type_female',
  hermaphrodite: 'details__avatar-container_type_hermaphrodite',
  'n/a': 'details__avatar-container_type_hermaphrodite'
}

const Details = ({ id, onClose }) => {
  const { lang } = useSelector(selectControls);
  const {
    name,
    hair_color,
    skin_color,
    eye_color,
    height,
    mass,
    gender,
    tags
  } = useSelector(state => selectCharacterById(state, id));

  const genderClass = genderClasses[getGender(lang, gender)];

  return (
    <div className='details'>
      <div className='details__container'>
        <div className={`details__avatar-container ${genderClass}`}>
          <CharacterTags tags={tags} />
        </div>
        <div className='details__info-container'>
          <h2 className='details__title'>
            {name}
          </h2>
          <div className='details__info'>
            <p className='details__info-text'>
              {`${getFieldName(lang, 'hair_color')}: ${hair_color}`}
            </p>
            <p className='details__info-text'>
              {`${getFieldName(lang, 'skin_color')}: ${skin_color}`}
            </p>
            <p className='details__info-text'>
              {`${getFieldName(lang, 'eye_color')}: ${eye_color}`}
            </p>
          </div>
          <div className='details__attributes'>
          <CharacterAttribute 
            value={height} 
            label={getFieldName(lang, 'height')} 
            detail={true}/>
          <CharacterAttribute 
            value={mass} 
            label={getFieldName(lang, 'mass')}
            detail={true} />
          </div>
        </div>
        <button className='details__btn-close' onClick={onClose}></button>
      </div>
    </div>
  );
};

export default Details;