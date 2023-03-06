import { useCharacters } from './useCharacters';

const CharactersList = () => {
  const [characters] = useCharacters();

  return (
    <ul>
      {characters.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  )
}

export default CharactersList;