import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

export const getCampers = createAsyncThunk(
  'campers/getAll',
  async (_, thunkAPI) => {
    try {
      const queryParams = {
        page: thunkAPI.getState().campers.page,
        limit: 4,
      };
      const {
        location: rawLocation,
        equipment,
        form,
      } = thunkAPI.getState().filters;
      let location = rawLocation.trim();
      if (location && location.includes(', ')) {
        const [city, country] = location.split(', ');
        if (city && country) {
          location = `${country}, ${city}`;
        }
        queryParams.location = location;
      }
      if (form) queryParams.form = form;
      if (equipment.length > 0) {
        for (const item of equipment) {
          if (item === 'automatic') {
            queryParams.transmission = 'automatic';
            continue;
          }
          queryParams[item] = true;
        }
      }
      const { data } = await axios.get('/campers', {
        params: queryParams,
      });
      return data;
    } catch (e) {
      if (e.status === 404) {
        return { items: [], total: 0 };
      }
      toast.error('Failed to fetch campers');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
