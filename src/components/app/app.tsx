import Main from '../../pages/main/main';
// import Favorites from '../../pages/favorites/favorites';
// import Login from '../../pages/login/login';
// import Offer from '../../pages/offer/offer';

type AppProps = {
  rentOffersNumber: number;
}

function App({rentOffersNumber}: AppProps): JSX.Element {
  return (
    <Main rentOffersNumber={rentOffersNumber}/>
    // <Favorites />
    // <Login />
    // <Offer />
  );
}

export default App;
