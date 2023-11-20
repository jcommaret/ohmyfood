import { Helmet } from "react-helmet-async";
import { lazy, Suspense } from "react";

import Loader from "../../components/Loader";

const TopSection = lazy(() => import("../../components/TopSection"));
const FonctSection = lazy(() => import("../../components/FonctSection"));
const RestaurantsList = lazy(() => import("../../components/RestaurantsList"));

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
