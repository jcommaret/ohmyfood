import { Helmet, HelmetProvider } from "react-helmet-async";
import { useParams } from "react-router-dom";

import Header from "../components/Header";
import Heart from "../components/Heart";
import restaurants from "../assets/data/restaurants";

function Restaurant() {
  const id = useParams().id;
  const restaurant = restaurants.find((restaurant) => restaurant.id === id);
  const name = restaurant.title;
  const entrees = restaurant.entrees;
  const plats = restaurant.plats;
  const desserts = restaurant.desserts;

  const entreesList = entrees.map((entree) => {
    return (
      <section className="plat">
        <div className="plat__eat">
          <p>{entree.name}</p>
          <p>{entree.desc}</p>
        </div>
        <div className="plat-informations">
          <div className="plat-informations__price">
            <p>{entree.price} €</p>
          </div>
          <div className="plat-informations__check">
            <p>
              <i className="fa-solid fa-check"></i>
            </p>
          </div>
        </div>
      </section>
    );
  });

  const platsList = plats.map((plat) => {
    return (
      <section className="plat">
        <div className="plat__eat">
          <p>{plat.name}</p>
          <p>{plat.desc}</p>
        </div>
        <div className="plat-informations">
          <div className="plat-informations__price">
            <p>{plat.price} €</p>
          </div>
          <div className="plat-informations__check">
            <p>
              <i className="fa-solid fa-check"></i>
            </p>
          </div>
        </div>
      </section>
    );
  });

  const dessertsList = desserts.map((dessert) => {
    return (
      <section className="plat">
        <div className="plat__eat">
          <p>{dessert.name}</p>
          <p>{dessert.desc}</p>
        </div>
        <div className="plat-informations">
          <div className="plat-informations__price">
            <p>{dessert.price} €</p>
          </div>
          <div className="plat-informations__check">
            <p>
              <i className="fa-solid fa-check"></i>
            </p>
          </div>
        </div>
      </section>
    );
  });

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Oh My Food - Restaurant : {name} </title>
        </Helmet>
      </HelmetProvider>

      <Header isNotHomepage={true} />

      <main className="menu">
        <div className="cover">
          <img className="cover__img" alt={name} />
        </div>

        <section className="carte">
          <div className="carte__heading">
            <h2>{name}</h2>
            <Heart />
          </div>

          <div className="food">
            <div className="separator">
              <h3 className="food__heading">Entrées</h3>
              <div className="line"></div>
              {entreesList}
            </div>

            <div className="separator">
              <h3 className="food__heading">Plats</h3>
              <div className="line"></div>
              {platsList}
            </div>
            <div className="separator">
              <h3 className="food__heading">Desserts</h3>
              <div className="line"></div>
              {dessertsList}
            </div>
          </div>

          <section className="order">
            <button className="button__gradient">Commander</button>
          </section>
        </section>
      </main>
    </>
  );
}

export default Restaurant;
