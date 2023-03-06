import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../config';
import { getFieldName, transformCharacter } from '../../utils/apiHelpers';

export const loadCharacters = createAsyncThunk(
  'characters/load-characters',
  async (_, { getState, rejectWithValue }) => {
    const lang = getState().controls.lang;
    const url = lang === 'en' ? api.ALL_PEOPLE : api.ALL_PEOPLE_WOOKIEE_LANG;

    let res = [];
    let page = 1;
    while (page) {
      try {
        const response = await fetch(`${url}page=${page}`);

        if (! response.ok) {
          return rejectWithValue(`Couldn't fetch ${url}, received ${response.status}`);
        }
        const text = await response.text();
        const data = JSON.parse(text.replaceAll(getFieldName(lang, 'null'), 'null'));

        res = [
          ...res, 
          ...data[getFieldName(lang, 'results')].map(item => transformCharacter(lang, item)),
        ];
        page++;
        
        if (!data[getFieldName(lang, 'next')]) {
          page = 0;
        }
      } catch (error) {
        return rejectWithValue(error.message);
      }
      break;
    }
    const filter = Array.from(new Set(res.map(item => item.filterField)));
    return [res, filter];
  },
  {
    condition: (_, { getState }) => {
      const { status } = getState().characters;
      return status === 'idle';
    }
  }
);