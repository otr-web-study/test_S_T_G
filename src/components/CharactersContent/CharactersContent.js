import { useSelector } from 'react-redux';

import { selectCharactersInfo } from '../../futures/characters/charactersSelectors';
import Container from '../Container';
import CharactersList from '../CharactersList/CharactersList';
import Spinner from '../../components/Spinner';
import { CustomSelect } from '../../futures/controls/CustomSelect';
import './CharactersContent.css';
import Button from '../Button';
import { useLang } from '../../futures/controls/useLang';
import { getFieldName } from '../../utils/apiHelpers';

const CharactersContent = () => {
  const { status, qty } = useSelector(selectCharactersInfo);
  const [lang, handleClickLang] = useLang();

  if (status === 'loading') {
    return <Spinner />;
  }

  return (
    <section className='characters-content'>
      <Container className='container characters-content__container'>
        <div className='characters-content__content'>
          <p className='characters-content__lang'>
            {`language: ${lang}`}
          </p>
          <h2 className='characters-content__header'>
            {`${qty} Peoples for you to choose your favorite`}
          </h2>
          <div className='characters-content__select-container'>
            <span className='characters-content__select-label'>
              {getFieldName(lang, 'eye_color')}
            </span>
            <CustomSelect />
          </div>
          <CharactersList />
        </div>
        <div className='characters-content__footer'>
          <Button 
            className='button characters-content__btn-lang'
            onClick={handleClickLang} />
        </div>
      </Container>
    </section>
  );
}

export default CharactersContent;