import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer class="footer">
      <h1 class="footer__logo">ohmyfood</h1>
      <ul class="footer__menu">
        <li>
          <Link to="#">
            <span>
              <i class="fa-solid fa-utensils"></i>
            </span>{" "}
            Proposez un restaurant
          </Link>
        </li>
        <li>
          <Link to="#">
            <span>
              <i class="fa-solid fa-handshake-angle"></i>
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
