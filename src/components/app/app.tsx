import Main from '../../pages/main/main';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import Offer from '../../pages/offer/offer';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const/const';
import PrivateRoute from '../private-route/private-route';
import { Offers } from '../../types/offer';

type AppProps = {
  offers: Offers;
}

function App({offers}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path = {AppRoute.MAIN}
          element = {
            <Main/>
          }
        />
        <Route
          path = {AppRoute.LOGIN}
          element = {<Login />}
        />
        <Route
          path = {AppRoute.FAVORITES}
          element = {
            <PrivateRoute
              authorizationStatus = {AuthorizationStatus.AUTH}
            >
              <Favorites
                offers = {offers}
              />
            </PrivateRoute>
          }
        />
        <Route
          path = {AppRoute.OFFER}
          element = {
            <Offer
              offers = {offers}
              offerID = {offers[11].id}
            />
          }
        />
        <Route
          path = '*'
          element = {<PageNotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
