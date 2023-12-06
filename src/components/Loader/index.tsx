import "./index.scss";

export function Loader() {
  return (
    <div className="loader">
      <div className="load">
        <i className="fas fa-hamburger"></i>
        <p>Chargement...</p>
        <div className="loader-animation"></div>
      </div>
    </div>
  );
}
export default Loader;
