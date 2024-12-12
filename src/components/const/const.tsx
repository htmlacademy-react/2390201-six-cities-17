export const Setting = {
  RENT_OFFERS_NUMBER: 76,
} as const;

export enum AppRoute {
  MAIN = '/',
  LOGIN = '/login',
  FAVORITES = '/favorites',
  OFFER = '/offer/:id'
}

export enum AuthorizationStatus {
  AUTH = 'AUTH',
  NO_AUTH = 'NO_AUTH',
  UNKNOWN = 'UNKNOWN'
}
