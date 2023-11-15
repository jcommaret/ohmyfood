import { Link } from "react-router-dom";
import "./index.scss";

export function Footer() {
  return (
    <footer className="footer">
      <h1 className="footer__logo">ohmyfood</h1>
      <ul className="footer__menu">
        <li>
          <Link to="#">
            <span>
              <i className="fa-solid fa-utensils"></i>
            </span>{" "}
            Proposez un restaurant
          </Link>
        </li>
        <li>
          <Link to="#">
            <span>
              <i className="fa-solid fa-handshake-angle"></i>
            </span>{" "}
            Devenir partenaire
          </Link>
        </li>
        <li>
          <Link to="#">Mentions légales</Link>
        </li>
        <li>
          <Link to="mailto:hello@openclassroom.com">Contact</Link>
        </li>
      </ul>
    </footer>
  );
}
export default Footer;
