import { Helmet } from "react-helmet-async";
import { Suspense } from "react";

import {
  Loader,
  TopSection,
  FonctSection,
  RestaurantsList,
} from "src/components";

import "./index.scss";

export function Homepage() {
  return (
    <>
      <Helmet>
        <title>Oh My Food !</title>
        <meta
          name="description"
          content="Welcome to oh My food, restaurant takeway plateform"
        ></meta>
        <meta name="theme-color" content="#FF00FF" />
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
