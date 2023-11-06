function FonctSection() {
  return (
    <section class="function-section">
      <h2 class="function-section__heading">Fonctionnement</h2>

      <div class="function-steps step-animation">
        <div class="button__function">
          <div class="button__function__number">
            <span>1</span>
          </div>
          <i class="fa-solid fa-mobile"></i>
          <div class="step__text">Choisissez votre restaurant</div>
        </div>

        <div class="button__function">
          <div class="button__function__number">
            <span>2</span>
          </div>
          <i class="fa-solid fa-bars"></i>
          <div class="function_text">Composez votre menu</div>
        </div>

        <div class="button__function">
          <div class="button__function__number">
            <span>3</span>
          </div>
          <i class="fa-solid fa-store"></i>
          <div class="function_text">Dégustez au restaurant</div>
        </div>
      </div>
    </section>
  );
}

export default FonctSection;
