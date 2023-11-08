import { Helmet } from "react-helmet";

const image = "images/restaurants/toa-heftiba-DQKerTsQwi0-unsplash.jpg";
const ImgInFolderPath = image;

function Restaurant() {
  return (
    <>
      <Helmet>
        <title>Oh My Food - Restaurant : </title>
      </Helmet>
      <header>
        <a className="header__back" href="index.html">
          <i className="fa-solid fa-arrow-left"></i>
        </a>
        <div className="header__logo">
          <h1>ohmyfood</h1>
        </div>
      </header>
      <main className="menu">
        <div className="cover">
          <img
            className="cover__img"
            src={ImgInFolderPath}
            alt="A la française"
          />
        </div>

        <section className="carte">
          <div className="carte__heading">
            <h2>A la française</h2>
            <div className="heart">
              <div className="icon">
                <svg className="heart-main" viewBox="0 0 512 512" width="30">
                  <path
                    className="fill"
                    d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
                  />
                  <path
                    className="empty"
                    d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
                  />
                  <defs>
                    <linearGradient
                      id="FillGradient4"
                      gradientTransform="rotate(90)"
                    >
                      <stop offset="2%" stopColor="#9356DC" />
                      <stop offset="98%" stopColor="#FF79DA" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
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
