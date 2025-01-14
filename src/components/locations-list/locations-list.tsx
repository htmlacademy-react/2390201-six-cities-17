import { CITIES } from '../const/const';
import { useAppDispatch } from '../../hooks';
import { changeCity } from '../../store/action';

type LocationsListProps = {
  selectedCity: string;
}

function LocationsList ({selectedCity}: LocationsListProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) =>(
            <li key={city} className="locations__item">
              <a
                className={`locations__item-link tabs__item${selectedCity === city ? ' tabs__item--active' : ''}`}
                href="#"
                onClick={(evt) => {
                  evt.preventDefault();
                  dispatch(changeCity(city));
                }}
              >
                <span>{city}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default LocationsList;
