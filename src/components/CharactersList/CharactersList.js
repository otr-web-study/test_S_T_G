import { useCharacters } from '../../futures/characters/useCharacters';
import CharacterCard from '../CharacterCard/CharacterCard';
import './CharactersList.css';

const CharactersList = () => {
  const [characters] = useCharacters();

  return (
    <ul className='characters-list'>
      {characters.map(item => (
        <li key={item.id}>{<CharacterCard card={item} />}</li>
      ))}
    </ul>
  )
}

export default CharactersList;