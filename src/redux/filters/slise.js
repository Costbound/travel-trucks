import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    location: '',
    equipment: [],
    form: null,
  },
  reducers: {
    changeLocationFilter(state, action) {
      state.location = action.payload;
    },
    changeEquipmentFilter(state, action) {
      state.equipment = action.payload;
    },
    changeFormFilter(state, action) {
      state.form = action.payload;
    },
    changeFilters(state, action) {
      state.location = action.payload.location;
      state.equipment = action.payload.equipment;
      state.form = action.payload.form;
    },
  },
});

export const {
  changeLocationFilter,
  changeEquipmentFilter,
  changeFormFilter,
  changeFilters,
} = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
