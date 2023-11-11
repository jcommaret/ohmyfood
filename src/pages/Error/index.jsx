import { useRouteError } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

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
        <div className="title-wrapper">
          <h1 className="sweet-title">
            <span data-text={error.status}>{error.status}</span>
          </h1>
          <span className="top-title">The page doesn't exist</span>
        </div>
      </div>

      <Footer />
    </>
  );
}
