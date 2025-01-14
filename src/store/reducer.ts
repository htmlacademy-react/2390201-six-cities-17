import { createReducer } from '@reduxjs/toolkit';
import { changeCity, fillOffersList } from './action';
import { INITIAL_CITY_NAME } from '../components/const/const';
import { Offers } from '../types/offer';

const initialState = {
  city: INITIAL_CITY_NAME,
  offers: [] as Offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOffersList, (state, action) => {
      state.offers = action.payload;
    });
});

export {reducer};
