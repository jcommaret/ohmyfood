import { useRouteError } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import "./index.scss";

import { Header, Footer } from "@/components";

export function ErrorPage() {
  const error = useRouteError();
  const message = "La page n'existe pas ou a été supprimée.";

  return (
    <>
      <Helmet>
        <title>Erreur</title>
      </Helmet>

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

export default ErrorPage;
