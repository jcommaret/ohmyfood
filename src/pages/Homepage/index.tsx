import { Helmet } from "react-helmet-async";

import Loader from "../../components/Loader";
import Header from "../../components/Header";
import TopSection from "../../components/TopSection";
import FonctSection from "../../components/FonctSection";
import RestaurantsList from "../../components/RestaurantsList";

import "./index.scss";

export function Homepage() {
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
        <RestaurantsList />
      </main>
    </>
  );
}

export default Homepage;
