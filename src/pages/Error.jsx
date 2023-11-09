import { useRouteError } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Erreur</title>
        </Helmet>
      </HelmetProvider>

      <Header isNotHomepage={true} />

      <div className="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>

      <Footer />
    </>
  );
}
