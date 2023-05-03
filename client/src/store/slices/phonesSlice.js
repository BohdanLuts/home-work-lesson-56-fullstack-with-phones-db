import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as API from './../../api';

const PHONES_SLICE_NAME = 'phones';

export const getPhonesThunk = createAsyncThunk(
  `${PHONES_SLICE_NAME}/get`,
  async (payload, thunkAPI) => {
    try {
      const response = await API.getPhones();
      return response.data.data;
    } catch (err) {
      return thunkAPI.rejectWithValue({ message: err.message });
    }
  }
);

export const createPhoneThunk = createAsyncThunk(
  `${PHONES_SLICE_NAME}/create`,
  async (payload, thunkAPI) => {
    try {
      const response = await API.createPhone(payload);
      return response.data.data;
    } catch (err) {
      return thunkAPI.rejectWithValue({ message: err.message });
    }
  }
);

export const deletePhoneThunk = createAsyncThunk(
  `${PHONES_SLICE_NAME}/delete`,
  async (payload, thunkAPI) => {
    try {
      await API.deletePhone(payload);
      return payload;
    } catch (err) {
      return thunkAPI.rejectWithValue({ message: err.message });
    }
  }
);

const initialState = {
  phones: [],
  isFetching: false,
  error: null,
};

const phonesSlice = createSlice({
  name: PHONES_SLICE_NAME,
  initialState,
  extraReducers: builder => {
    // GET
    builder.addCase(getPhonesThunk.pending, state => {
      state.isFetching = true;
      state.error = null;
    });
    builder.addCase(getPhonesThunk.fulfilled, (state, action) => {
      state.isFetching = false;
      state.phones = [...action.payload];
    });
    builder.addCase(getPhonesThunk.rejected, (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    });
    // CREATE
    builder.addCase(createPhoneThunk.pending, state => {
      state.isFetching = true;
      state.error = null;
    });
    builder.addCase(createPhoneThunk.fulfilled, (state, action) => {
      state.isFetching = false;
      state.phones.push(action.payload);
    });
    builder.addCase(createPhoneThunk.rejected, (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    });
    // DELETE
    builder.addCase(deletePhoneThunk.pending, state => {
      state.isFetching = true;
      state.error = null;
    });
    builder.addCase(deletePhoneThunk.fulfilled, (state, action) => {
      state.isFetching = false;
      const deletedPhoneIndex = state.phones.findIndex(
        p => p.id === action.payload
      );
      state.phones.splice(deletedPhoneIndex, 1);
    });
    builder.addCase(deletePhoneThunk.rejected, (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    });
  },
});

const { reducer } = phonesSlice;

export default reducer;
