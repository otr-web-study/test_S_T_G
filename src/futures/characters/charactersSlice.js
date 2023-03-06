import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

import { loadCharacters } from './charactersActions';

export const COUNT_PER_PAGE = 9;

const charactersAdapter = createEntityAdapter();

const initialState = charactersAdapter.getInitialState({
  filter: [],
  status: 'idle',
  error: null,
});

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    clearCharacters: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCharacters.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loadCharacters.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload || 'Can\'t load data';
      })
      .addCase(loadCharacters.fulfilled, (state, action) => {
        const [characters, filter] = action.payload;
        state.status = 'fulfilled';
        state.filter = filter;
        charactersAdapter.setAll(state, characters);
      })
  }
});

export const charactersReducer = charactersSlice.reducer;