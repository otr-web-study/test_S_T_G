import { configureStore } from '@reduxjs/toolkit';

import { controlsReducer } from './futures/controls/controlsSlice';
import { charactersReducer } from './futures/characters/charactersSlice';

export const store = configureStore({
  reducer: {
    controls: controlsReducer,
    characters: charactersReducer,
  },
});