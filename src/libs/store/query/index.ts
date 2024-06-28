import { createSlice } from '@reduxjs/toolkit';

type StatesProps = {
  q?: string;
  category?: string;
};

const slice = createSlice({
  name: 'query',
  initialState: { q: '', category: 'all' } as StatesProps,
  reducers: {
    setQuery: (state, action) => {
      const { q, category } = action.payload;
      state.q = q || '';
      state.category = category || '';
    },
    reset: (state, _action) => {
      state.q = '';
      state.category = '';
    },
  },
});

export const { setQuery, reset } = slice.actions;

export default slice.reducer;
