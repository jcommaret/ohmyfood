import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import Loader from "../components/Loader";
import Header from "../components/Header";
import TopSection from "../components/TopSection";
import FonctSection from "../components/FonctSection";

import Heart from "../components/Heart";
import restaurants from "../assets/data/restaurants.json";

const ImagePath = process.env.PUBLIC_URL + "/images/restaurants/";

function Homepage() {
  return (
    <>
      <Loader />
      <Helmet>
        <title>Oh My Food !</title>
      </Helmet>

      <Header isNotHomepage={false} />

      <main className="index">
        <TopSection />
        <FonctSection />

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
                    src={`${ImagePath + restaurant.cover}`}
                    alt={restaurant.name}
                  />
                  {restaurant.isNew && (
                    <span className="place_new">Nouveau</span>
                  )}
                  <div className="place__description">
                    <div className="place__information">
                      <h4 className="place__heading">{restaurant.title}</h4>
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
      </main>
    </>
  );
}

export default Homepage;
