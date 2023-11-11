import { useRouteError } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

import "./index.scss";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ErrorPage() {
  const error = useRouteError();
  const message = "La page n'existe pas ou a été supprimée.";

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Erreur</title>
        </Helmet>
      </HelmetProvider>

      <Header isNotHomepage={true} />
      <div className="error-page">
        <div className="title-wrapper">
          <h1 className="sweet-title">
            <span data-text={error.status}>{error.status}</span>
          </h1>
          <span className="top-title">{message}</span>
        </div>
      </div>

      <Footer />
    </>
  );
}
