import { Link } from "react-router-dom";

import { Heart } from "src/components/index.ts";

import "./index.scss";

import restaurants from "src/assets/data/restaurants.json";


export function RestaurantsList() {
  return (
    <section className="restaurant-section">
      <h2 className="restaurant-section__heading">Restaurants</h2>
      <div className="all-places">
        <div className="places">
          {restaurants.map((restaurant) => (
            <Link
              className="place"
              to={`/restaurant/${restaurant.id}`}
              key={restaurant.id}
            >
              <img
                className="place__img"
                src={`${restaurant.cover}`}
                alt={restaurant.title}
              />
              {restaurant.isNew && <span className="place_new">Nouveau</span>}
              <div className="place__description">
                <div className="place__information">
                  <h3 className="place__heading">{restaurant.title}</h3>
                  <p className="place__text">{restaurant.place}</p>
                </div>
                <div className="place__favorites">
                  <Heart />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RestaurantsList;
