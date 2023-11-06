function TopSection() {
  return (
    <section class="top-section">
      <div class="location">
        <div class="here">
          <i class="fa-solid fa-location-dot"></i>
          <span>Paris, Belleville</span>
        </div>
      </div>
      <div class="description">
        <h2 class="description__heading">Reservez le menu qui vous convient</h2>
        <p class="description__text">
          Découvrez des restaurants d'exception selectionnés par nos soins.
        </p>
        <button class="button__gradient">Explorer nos restaurants</button>
      </div>
    </section>
  );
}
export default TopSection;
