import { Helmet, HelmetProvider } from "react-helmet-async";

import Loader from "../components/Loader";
import Header from "../components/Header";
import TopSection from "../components/TopSection";
import FonctSection from "../components/FonctSection";
import RestaurantsList from "../components/RestaurantsList";

function Homepage() {
  return (
    <>
      <Loader />
      <HelmetProvider>
        <Helmet>
          <title>Oh My Food !</title>
        </Helmet>
      </HelmetProvider>

      <Header isNotHomepage={false} />

      <main className="index">
        <TopSection />
        <FonctSection />
        <RestaurantsList />
      </main>
    </>
  );
}

export default Homepage;
