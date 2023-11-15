import { Link } from "react-router-dom";
import "./index.scss";

export function Header({ isNotHomepage }) {
  return (
    <header className="home">
      {isNotHomepage && (
        <Link className="header__back" to="/">
          <i className="fa-solid fa-arrow-left"></i>
        </Link>
      )}
      <div className="header__logo">
        <h1>ohmyfood</h1>
      </div>
    </header>
  );
}
export default Header;
