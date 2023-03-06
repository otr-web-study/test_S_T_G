import { useSelector } from 'react-redux';

import { selectCharactersInfo } from '../../futures/characters/charactersSelectors';
import Container from '../Container';
import CharactersList from '../CharactersList/CharactersList';
import Spinner from '../../components/Spinner';
import { CustomSelect } from '../../futures/controls/CustomSelect';
import './CharactersContent.css';

const CharactersContent = () => {
  const { status } = useSelector(selectCharactersInfo);

  if (status === 'loading') {
    return <Spinner />;
  }

  return (
    <section className='characters-content'>
      <Container className='container characters-content__container'>
        <div className='characters-content__content'>
          <p className='characters-content__lang'>
            language: en
          </p>
          <h2 className='characters-content__header'>
            60 Peoples for you to choose your favorite
          </h2>
          <div className='characters-content__select-container'>
            <span className='characters-content__select-label'>color eye</span>
            <CustomSelect />
          </div>
          <CharactersList />
        </div>
        <div className='characters-content__footer'>txt</div>
      </Container>
    </section>
  );
}

export default CharactersContent;