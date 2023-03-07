import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import { selectCharactersInfo, selectVisibleCharacters } from './charactersSelectors';
import { selectControls } from '../controls/controlsSlice';
import { loadCharacters } from './charactersActions';

export const useCharacters = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const dispatch = useDispatch();
  const { status, error, qty } = useSelector(selectCharactersInfo);
  const controls = useSelector(selectControls);
  const { characters, more } = useSelector(state => selectVisibleCharacters(state, controls));

  useEffect(() => {
    if (!qty) {
      dispatch(loadCharacters());
    }
  }, [qty, dispatch]);

  const handleSelectCard = (id) => {
    setSelectedCard(id);
  }

  const handleDetailClose = () => {
    setSelectedCard(null);
  }

  return [
    characters,
    more,
    selectedCard,
    handleSelectCard,
    handleDetailClose,
    {status, error, qty},
  ];
}