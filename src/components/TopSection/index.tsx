export function TopSection() {
  return (
    <section className="top-section">
      <div className="location">
        <div className="here">
          <i className="fa-solid fa-location-dot"></i>
          <span>Paris, Belleville</span>
        </div>
      </div>
      <div className="description">
        <h2 className="description__heading">
          Reservez le menu qui vous convient
        </h2>
        <p className="description__text">
          Découvrez des restaurants d'exception selectionnés par nos soins.
        </p>
        <button className="button__gradient">Explorer nos restaurants</button>
      </div>
    </section>
  );
}

export default TopSection;
