import { Link } from "react-router-dom";
import "./index.scss";

type HeaderProps = {
  isNotHomepage: boolean;
};
// use headerProps to check if we are on the homepage or not
// if we are not on the homepage, we display the back button
// if we are on the homepage, we don't display the back button

export function Header({ isNotHomepage }: HeaderProps) {
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
