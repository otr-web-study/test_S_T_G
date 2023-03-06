import CharacterAttribute from '../CharacterAttribute/CharacterAttribute';
import CharacterTags from '../CharacterTags/CharacterTags';
import './CharacterCard.css';

const CharacterCard = ({ card }) => {

  return (
    <div className='card'>
      <h2 className='card__title'>
        {card.name}
      </h2>
      <div className='card__attributes'>
        <CharacterAttribute value={card.height} label='name' />
        <CharacterAttribute value={card.mass} label='mass' />
      </div>
      <CharacterTags tags={card.tags} />
    </div>
  );
}

export default CharacterCard;