import { useSelector, useDispatch } from 'react-redux';

import { setFilter } from './controlsSlice';

export const useFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.controls.filter);
  const filterList = useSelector(state => state.characters.filter);

  const options = filterList.map(item => ({value: item, label: item}));
  const filterValue = {value: filter, label: filter}

  const handleSelect = (item) => {
    dispatch(setFilter(item.value));
  }

  return [filterValue, options, handleSelect];
}