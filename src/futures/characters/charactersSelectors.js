import { COUNT_PER_PAGE } from './charactersSlice';

export const selectCharactersInfo = (state) => ({
  status: state.characters.status,
  error: state.characters.error,
  qty: state.characters.ids.length,
});

export const selectVisibleCharacters = (state, { filter = 'All', page = 1 }) => {
  const filtered = Object.entries(state.characters.entities).filter(
    ([_, character]) => (filter === 'All' || character.filterField === filter)
  );

  return {
    characters: filtered.slice(0, page * COUNT_PER_PAGE).map(([_, character]) => character),
    more: filtered.length > page * COUNT_PER_PAGE,
  }
}