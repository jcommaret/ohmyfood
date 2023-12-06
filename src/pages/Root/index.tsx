import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Suspense } from "react";

import { Loader, Header, Footer } from "src/components";

import "./index.scss";

export function Root() {
  return (
    <>
      <Helmet>
        <title>Oh My Food !</title>
        <meta name="theme-color" content="#FF00FF" />
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
