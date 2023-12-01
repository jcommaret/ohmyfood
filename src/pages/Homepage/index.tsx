import { Helmet } from "react-helmet-async";
import { Suspense } from "react";

import Loader from "../../components/Loader";
import TopSection from "../../components/TopSection";
import FonctSection from "../../components/FonctSection";
import RestaurantsList from "../../components/RestaurantsList";

import "./index.scss";

export function Homepage() {
  return (
    <>
      <Helmet>
        <title>Oh My Food !</title>
      </Helmet>

      <Suspense fallback={<Loader />}>
        <main className="index">
          <TopSection />
          <FonctSection />
          <RestaurantsList />
        </main>
      </Suspense>
    </>
  );
}

export default Homepage;
