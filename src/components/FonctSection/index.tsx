import "./index.scss";

export function FonctSection() {
  return (
    <section className="function-section">
      <h2 className="function-section__heading">Fonctionnement</h2>

      <div className="function-steps step-animation">
        <div className="button__function">
          <div className="button__function__number">
            <span>1</span>
          </div>
          <i className="fa-solid fa-mobile"></i>
          <div className="step__text">Choisissez votre restaurant</div>
        </div>

        <div className="button__function">
          <div className="button__function__number">
            <span>2</span>
          </div>
          <i className="fa-solid fa-bars"></i>
          <div className="function_text">Composez votre menu</div>
        </div>

        <div className="button__function">
          <div className="button__function__number">
            <span>3</span>
          </div>
          <i className="fa-solid fa-store"></i>
          <div className="function_text">Dégustez au restaurant</div>
        </div>
      </div>
    </section>
  );
}
export default FonctSection;
