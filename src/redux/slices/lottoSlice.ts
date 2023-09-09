import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  selectedRank: Rank;
};

const initialState: InitialState = {
  selectedRank: 1,
};

const lottoSlice = createSlice({
  name: 'lotto',
  initialState,
  reducers: {
    updateRank(state, action: PayloadAction<Rank>) {
      state.selectedRank = action.payload;
    },
  },
});

export default lottoSlice.reducer;

export const { updateRank } = lottoSlice.actions;
