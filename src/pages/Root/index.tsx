import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import "./index.scss";

import Footer from "../../components/Footer";

function Root() {
  return (
    <>
      <Helmet>
        <title>Oh My Food !</title>
      </Helmet>

      <Outlet />
      <Footer />
    </>
  );
}

export default Root;
