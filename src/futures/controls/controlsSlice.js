import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: 'All',
  page: '1',
  lang: 'en'
}

const controlsSlice = createSlice({
  name: 'controls',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setLang: (state, action) => {
      state.lang = action.payload;
    }
  }
});

export const controlsReducer = controlsSlice.reducer;
export const { setFilter, setPage, setLang } = controlsSlice.actions;
export const selectControls = ({ controls }) => ({
  filter: controls.filter,
  page: controls.page,
  lang: controls.lang,
})