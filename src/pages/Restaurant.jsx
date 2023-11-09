import { Helmet } from "react-helmet";

import Header from "../components/Header";
import Heart from "../components/Heart";

function Restaurant() {
  return (
    <>
      <Helmet>
        <title>Oh My Food - Restaurant : </title>
      </Helmet>

      <Header isNotHomepage={true} />

      <main className="menu">
        <div className="cover">
          <img className="cover__img" alt="A la française" />
        </div>

        <section className="carte">
          <div className="carte__heading">
            <h2>A la française</h2>
            <Heart />
          </div>

          <div className="food">
            <div className="separator">
              <h3 className="food__heading">Entrées</h3>
              <div className="line"></div>
              <section className="plat">
                <div className="plat__eat">
                  <p>Tartare de poulpe acidulé</p>
                  <p>Aux zestes d'orange</p>
                </div>
                <div className="plat-informations">
                  <div className="plat-informations__price">
                    <p>25€</p>
                  </div>
                  <div className="plat-informations__check">
                    <p>
                      <i className="fa-solid fa-check"></i>
                    </p>
                  </div>
                </div>
              </section>

              <section className="plat">
                <div className="plat__eat">
                  <p>Velouté de légumes d'antan</p>
                  <p>Carotte, panais, topinambour</p>
                </div>
                <div className="plat-informations">
                  <div className="plat-informations__price">
                    <p>35€</p>
                  </div>
                  <div className="plat-informations__check">
                    <p>
                      <i className="fa-solid fa-check"></i>
                    </p>
                  </div>
                </div>
              </section>

              <section className="plat">
                <div className="plat__eat">
                  <p>Soupe à l'oignon</p>
                  <p>Revisitée</p>
                </div>

                <div className="plat-informations">
                  <div className="plat-informations__price">
                    <p>20€</p>
                  </div>
                  <div className="plat-informations__check">
                    <p>
                      <i className="fa-solid fa-check"></i>
                    </p>
                  </div>
                </div>
              </section>
            </div>

            <div className="separator">
              <h3 className="food__heading">Plats</h3>
              <div className="line"></div>
              <section className="plat">
                <div className="plat__eat">
                  <p>Coquilles Saint-Jacques</p>
                  <p>Accompagnées d'une purée de panais</p>
                </div>

                <div className="plat-informations">
                  <div className="plat-informations__price">
                    <p>40€</p>
                  </div>
                  <div className="plat-informations__check">
                    <p>
                      <i className="fa-solid fa-check"></i>
                    </p>
                  </div>
                </div>
              </section>
              <section className="plat">
                <div className="plat__eat">
                  <p>Magret de canard</p>
                  <p>Et parmentier de pommes de terre</p>
                </div>
                <div className="plat-informations">
                  <div className="plat-informations__price">
                    <p>35€</p>
                  </div>
                  <div className="plat-informations__check">
                    <p>
                      <i className="fa-solid fa-check"></i>
                    </p>
                  </div>
                </div>
              </section>

              <section className="plat">
                <div className="plat__eat">
                  <p>Pigeonneau d’Ille-et-Vilaine</p>
                  <p>Sur son lit de gnocchis aux légumes</p>
                </div>

                <div className="plat-informations">
                  <div className="plat-informations__price">
                    <p>44€</p>
                  </div>
                  <div className="plat-informations__check">
                    <p>
                      <i className="fa-solid fa-check"></i>
                    </p>
                  </div>
                </div>
              </section>
            </div>

            <div className="separator">
              <h3 className="food__heading">Desserts</h3>
              <div className="line"></div>
              <section className="plat">
                <div className="plat__eat">
                  <p>Pétales de violettes glacés</p>
                  <p>Et purée de noisettes</p>
                </div>

                <div className="plat-informations">
                  <div className="plat-informations__price">
                    <p>18€</p>
                  </div>
                  <div className="plat-informations__check">
                    <p>
                      <i className="fa-solid fa-check"></i>
                    </p>
                  </div>
                </div>
              </section>

              <section className="plat">
                <div className="plat__eat">
                  <p>Fondant au chocolat</p>
                  <p>Revisité</p>
                </div>

                <div className="plat-informations">
                  <div className="plat-informations__price">
                    <p>23€</p>
                  </div>
                  <div className="plat-informations__check">
                    <p>
                      <i className="fa-solid fa-check"></i>
                    </p>
                  </div>
                </div>
              </section>

              <section className="plat">
                <div className="plat__eat">
                  <p>Millefeuille croustillant</p>
                  <p>Myrtilles et pâte d’amande</p>
                </div>

                <div className="plat-informations">
                  <div className="plat-informations__price">
                    <p>23€</p>
                  </div>

                  <div className="plat-informations__check">
                    <p>
                      <i className="fa-solid fa-check"></i>
                    </p>
                  </div>
                </div>
              </section>
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
