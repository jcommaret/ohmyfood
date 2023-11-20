import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Suspense } from "react";
import "./index.scss";

import Loader from "../../components/Loader";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export function Root() {
  return (
    <>
      <Helmet>
        <title>Oh My Food !</title>
      </Helmet>
      <Header isNotHomepage={false} />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
}

export default Root;
