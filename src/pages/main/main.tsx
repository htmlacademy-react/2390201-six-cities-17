import Header from '../../components/header/header';
import LocationsList from '../../components/locations-list/locations-list';
import Map from '../../components/map/map';
import OffersList from '../../components/offers-list/offers-list';
import { useAppSelector } from '../../hooks';

function Main (): JSX.Element {
  const storeOffers = useAppSelector((state) => state.offers);
  const storeSelectedCity = useAppSelector((state) => state.city);
  const cityStoreOffers = storeOffers.filter((offer) => offer.city.name === storeSelectedCity);

  // if (cityStoreOffers.length === 0) {
  //   cityStoreOffers = storeOffers;
  // }
  const firstOffer = cityStoreOffers[0];

  return (
    <div className="page page--gray page--main">
      <Header/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <LocationsList
          selectedCity={storeSelectedCity}
        />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{cityStoreOffers.length} places to stay in {storeSelectedCity}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <OffersList
                  offers={cityStoreOffers}
                  shownOffersNumber={cityStoreOffers.length}
                  showFavorites={false}
                />
              </div>
            </section>
            <div className="cities__right-section">
              <Map
                city={firstOffer.city}
                offersOnMap={cityStoreOffers}
                selectedOffer={firstOffer}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
