import { createSlice } from '@reduxjs/toolkit';
import { getCampers } from './operations';

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    page: 1,
    total: 0,
    items: [],
    loading: false,
    loadingMore: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCampers.pending, (state) => {
        state.error = null;
        state.loading = state.items.length === 0;
        state.loadingMore = state.items.length > 0;
      })
      .addCase(getCampers.fulfilled, (state, action) => {
        const newItems = action.payload.items;
        const existingIds = new Set(state.items.map((item) => item.id));
        const filteredNewItems = newItems.filter(
          (item) => !existingIds.has(item.id)
        );
        state.items = [...state.items, ...filteredNewItems];
        state.total = action.payload.total;
        state.loading = false;
        state.loadingMore = false;
      })
      .addCase(getCampers.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
        state.loadingMore = false;
      });
  },
  reducers: {
    clearCampers: (state) => {
      state.items = [];
      state.total = 0;
      state.page = 1;
    },
    incrementPage: (state) => {
      state.page += 1;
    },
  },
});

export const { clearCampers, incrementPage } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
