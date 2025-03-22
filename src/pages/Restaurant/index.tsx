import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import restaurants from "src/assets/data/restaurants.json";

import { Header, Heart, Button, Footer } from "src/components";

import "./index.scss";

interface MenuItem {
  name: string;
  desc: string;
  price: string;
}

interface Restaurant {
  id: string;
  isNew: boolean;
  title: string;
  place: string;
  cover: string;
  entrees: MenuItem[];
  plats: MenuItem[];
  desserts: MenuItem[];
}

export function Restaurant() {
  const { id } = useParams();
  const restaurant = restaurants.find((r: Restaurant) => r.id === id);

  if (!restaurant) {
    return <div>Restaurant non trouvé</div>;
  }

  const { title: name, cover, entrees, plats, desserts } = restaurant;

  const entreesList = entrees.map((entree: MenuItem, index: number) => {
    return (
      <section className="plat" key={index}>
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

  const platsList = plats.map((plat: MenuItem, index: number) => {
    return (
      <section className="plat" key={index}>
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

  const dessertsList = desserts.map((dessert: MenuItem, index: number) => {
    return (
      <section className="plat" key={index}>
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

  const restaurantWithName = "Restaurant : " + name;

  return (
    <>
      <Helmet>
        <title>Oh My Food - {restaurantWithName} </title>
        <meta name="description" content={restaurantWithName}></meta>
        <meta name="theme-color" content="#FF00FF" />
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
