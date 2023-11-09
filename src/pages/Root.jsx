import { Outlet } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

import "./../styles/sass/main.scss";

import Footer from "../components/Footer";
function Root() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Oh My Food !</title>
        </Helmet>
      </HelmetProvider>

      <Outlet />
      <Footer />
    </>
  );
}

export default Root;
