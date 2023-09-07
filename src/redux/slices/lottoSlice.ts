import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  selectedRank: Rank;
  totalPrize: number;
};

const initialState: InitialState = {
  selectedRank: 1,
  totalPrize: 0,
};

const lottoSlice = createSlice({
  name: 'lotto',
  initialState,
  reducers: {
    setRank(state, action: PayloadAction<Rank>) {
      state.selectedRank = action.payload;
    },
    sumPrize(state, action: PayloadAction<number>) {
      state.totalPrize += action.payload;
    },
  },
});

export default lottoSlice.reducer;
