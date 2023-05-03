import { combineReducers } from '@reduxjs/toolkit';
import phonesReducer from './slices/phonesSlice';

const rootReducer = combineReducers({
  phonesData: phonesReducer,
});

export default rootReducer;
