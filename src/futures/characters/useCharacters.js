import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { selectCharactersInfo, selectVisibleCharacters } from './charactersSelectors';
import { selectControls } from '../controls/controlsSlice';
import { loadCharacters } from './charactersActions';

export const useCharacters = () => {
  const dispatch = useDispatch();
  const { status, error, qty } = useSelector(selectCharactersInfo);
  const controls = useSelector(selectControls);
  const characters = useSelector(state => selectVisibleCharacters(state, controls));

  useEffect(() => {
    if (!qty) {
      dispatch(loadCharacters());
    }
  }, [qty, dispatch]);

  return [characters, {status, error, qty}];
}