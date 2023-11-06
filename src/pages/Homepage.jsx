import { Helmet } from "react-helmet";

import Loader from "../components/Loader";
import Header from "../components/Header";
import TopSection from "../components/TopSection";
import FonctSection from "../components/FonctSection";

function Homepage() {
  return (
    <>
      <Helmet>
        <title>Oh My Food !</title>
      </Helmet>
      <Loader />
      <Header />
      <main className="index">
        <TopSection />
        <FonctSection />
        <section class="restaurant-section">
          <h2 class="restaurant-section__heading">Restaurants</h2>
          <div class="all-places">
            <div class="places">
              <a class="place" href="la-palette-du-gout.html">
                <img
                  class="place__img"
                  src="images/restaurants/jay-wennington-N_Y88TWmGwA-unsplash.jpg"
                  alt="La palette du goût"
                />
                <span class="place_new">Nouveau</span>
                <div class="place__description">
                  <div class="place__information">
                    <h4 class="place__heading">La palette du goût</h4>
                    <p class="place__text">Menilmontant</p>
                  </div>
                  <div class="place__favorites">
                    <div class="heart">
                      <div class="icon">
                        <svg
                          class="heart-main"
                          viewBox="0 0 512 512"
                          width="30"
                        >
                          <path
                            class="fill"
                            d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
                          />
                          <path
                            class="empty"
                            d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
                          />
                          <defs>
                            <linearGradient
                              id="FillGradient1"
                              gradientTransform="rotate(90)"
                            >
                              <stop offset="2%" stop-color="#9356DC" />
                              <stop offset="98%" stop-color="#FF79DA" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </a>

              <a class="place" href="la-note-enchantee.html">
                <img
                  class="place__img"
                  src="images/restaurants/stil-u2Lp8tXIcjw-unsplash.jpg"
                  alt="La note enchantée"
                />
                <span class="place_new">Nouveau</span>
                <div class="place__description">
                  <div class="place__information">
                    <h4 class="place__heading">La note enchantée</h4>
                    <p class="place__text">Charonne</p>
                  </div>
                  <div class="place__favorites">
                    <div class="heart">
                      <div class="icon">
                        <svg
                          class="heart-main"
                          viewBox="0 0 512 512"
                          width="30"
                        >
                          <path
                            class="fill"
                            d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
                          />
                          <path
                            class="empty"
                            d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
                          />
                          <defs>
                            <linearGradient
                              id="FillGradient2"
                              gradientTransform="rotate(90)"
                            >
                              <stop offset="2%" stop-color="#9356DC" />
                              <stop offset="98%" stop-color="#FF79DA" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div class="places">
              <a class="place" href="a-la-francaise.html">
                <img
                  class="place__img"
                  src="images/restaurants/toa-heftiba-DQKerTsQwi0-unsplash.jpg"
                  alt="A la française"
                />
                <div class="place__description">
                  <div class="place__information">
                    <h4 class="place__heading">A la française</h4>
                    <p class="place__text">Cité rouge</p>
                  </div>
                  <div class="place__favorites">
                    <div class="heart">
                      <div class="icon">
                        <svg
                          class="heart-main"
                          viewBox="0 0 512 512"
                          width="30"
                        >
                          <path
                            class="fill"
                            d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
                          />
                          <path
                            class="empty"
                            d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
                          />
                          <defs>
                            <linearGradient
                              id="FillGradient3"
                              gradientTransform="rotate(90)"
                            >
                              <stop offset="2%" stop-color="#9356DC" />
                              <stop offset="98%" stop-color="#FF79DA" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </a>

              <a class="place" href="le-delice-des-sens.html">
                <img
                  class="place__img"
                  src="images/restaurants/louis-hansel-shotsoflouis-qNBGVyOCY8Q-unsplash.jpg"
                  alt="Le délice des sens"
                />
                <div class="place__description">
                  <div class="place__information">
                    <h4 class="place__heading">Le délice des sens</h4>
                    <p class="place__text">Folie Méricourt</p>
                  </div>

                  <div class="place__favorites">
                    <div class="heart">
                      <div class="icon">
                        <svg
                          class="heart-main"
                          viewBox="0 0 512 512"
                          width="30"
                        >
                          <path
                            class="fill"
                            d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
                          />
                          <path
                            class="empty"
                            d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
                          />
                          <defs>
                            <linearGradient
                              id="FillGradient4"
                              gradientTransform="rotate(90)"
                            >
                              <stop offset="2%" stop-color="#9356DC" />
                              <stop offset="98%" stop-color="#FF79DA" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Homepage;
