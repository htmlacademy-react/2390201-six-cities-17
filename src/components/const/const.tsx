export const Setting = {
  RENT_OFFERS_NUMBER: 76,
} as const;

export enum AppRoute {
  MAIN = '/',
  LOGIN = '/login',
  FAVORITES = '/favorites',
  OFFER = '/offer/:id',
  OFFER_BASE = '/offer/'
}

export enum AuthorizationStatus {
  AUTH = 'AUTH',
  NO_AUTH = 'NO_AUTH',
  UNKNOWN = 'UNKNOWN'
}

export enum CardType {
  CITIES = 'cities',
  FAVORITES = 'favorites'
}

export const CARD_TYPE_CITIES = 'cities';
export const CARD_TYPE_FAVORITES = 'favorites';

export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const INITIAL_CITY_NAME = 'Paris';

export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
