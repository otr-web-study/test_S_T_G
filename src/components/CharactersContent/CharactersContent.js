import { useSelector } from 'react-redux';

import Container from '../Container';
import CharactersList from '../../futures/characters/charactersList';
import { selectCharactersInfo } from '../../futures/characters/charactersSelectors';
import Spinner from '../../components/Spinner';
import './CharactersContent.css';

const CharactersContent = () => {
  const { status } = useSelector(selectCharactersInfo);

  if (status === 'loading') {
    return <Spinner />;
  }

  return (
    <section className='characters-content'>
      <Container className='container'>
        <p className='characters-content__lang'>
          language: en
        </p>
        <h2 className='characters-content__header'>
          60 Peoples for you to choose your favorite
        </h2>
        <CharactersList />
      </Container>
    </section>
  );
}

export default CharactersContent;