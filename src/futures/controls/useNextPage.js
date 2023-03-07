import { useSelector, useDispatch } from 'react-redux';
import { selectControls, setPage } from './controlsSlice';

export const useNextPage = () => {
  const dispatch = useDispatch();
  const { page } = useSelector(selectControls);

  const handleClickNext = () => {
    dispatch(setPage(page + 1));
  }

  return [handleClickNext];
}
