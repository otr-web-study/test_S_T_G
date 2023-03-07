import { useCharacters } from '../../futures/characters/useCharacters';
import CharacterCard from '../CharacterCard/CharacterCard';
import MoreCharacters from '../MoreCharacters/MoreCharacters';
import Details from '../Details/Details';
import './CharactersList.css';

const CharactersList = () => {
  const [
    characters,
    more,
    selectedCard,
    handleSelectCard,
    handleDetailClose
  ] = useCharacters();

  return (
    <div className='characters-list'>
      <ul className='characters-list__list'>
        {characters.map(item => (
          <li key={item.id}>{<CharacterCard card={item} onClick={handleSelectCard} />}</li>
        ))}
      </ul>
      {more && <MoreCharacters />}
      {selectedCard && <Details id={selectedCard} onClose={handleDetailClose}/>}
    </div>
  )
}

export default CharactersList;