import {createAction} from '@reduxjs/toolkit';
import { Offers } from '../types/offer';

export const Action = {
  CHANGE_CITY: 'changeCity',
  FILL_OFFERS_LIST: 'fillOffersList',
};

export const changeCity = createAction<string>(Action.CHANGE_CITY);

export const fillOffersList = createAction<Offers>(Action.FILL_OFFERS_LIST);

