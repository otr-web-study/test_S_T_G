import { useSelector, useDispatch } from 'react-redux';
import { selectControls, setLang } from './controlsSlice';
import { clearCharacters } from '../characters/charactersSlice';

export const useLang = () => {
  const dispatch = useDispatch();
  const { lang } = useSelector(selectControls);

  const handleClickLang = () => {
    dispatch(clearCharacters());
    dispatch(setLang(lang === 'en' ? 'wo' : 'en'));
  }

  return [lang, handleClickLang];
}