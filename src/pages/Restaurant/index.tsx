import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { lazy } from "react";

const Header = lazy(() => import("../../components/Header"));
const Heart = lazy(() => import("../../components/Heart"));
const Button = lazy(() => import("../../components/Button"));
const Footer = lazy(() => import("../../components/Footer"));

import restaurants from "../../assets/data/restaurants.json";

import "./index.scss";

export function Restaurant() {
  const id = useParams().id;
  const restaurant = restaurants.find((restaurant) => restaurant.id === id);
  const name = restaurant.title;
  const cover = restaurant.cover;
  const entrees = restaurant.entrees;
  const plats = restaurant.plats;
  const desserts = restaurant.desserts;

  const entreesList = entrees.map((entree, id) => {
    return (
      <section className="plat" key={id}>
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

  const platsList = plats.map((plat, id) => {
    return (
      <section className="plat" key={plat + id}>
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

  const dessertsList = desserts.map((dessert, id) => {
    return (
      <section className="plat" key={id}>
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
      <Helmet>
        <title>Oh My Food - Restaurant : {name} </title>
      </Helmet>
      <Header isNotHomepage={true} />
      <main className="menu">
        <div className="cover">
          <img className="cover__img" alt={name} src={`${cover}`} />
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

          <Button></Button>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Restaurant;
