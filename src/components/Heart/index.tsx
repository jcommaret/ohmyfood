import "./index.scss";

export function Heart() {
  return (
    <div className="heart">
      <div className="icon">
        <svg className="heart-main" viewBox="0 0 512 512" width="30">
          <path
            className="fill"
            d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
          />
          <path
            className="empty"
            d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
          />
          <defs>
            <linearGradient id="FillGradient4" gradientTransform="rotate(90)">
              <stop offset="2%" stopColor="#9356DC" />
              <stop offset="98%" stopColor="#FF79DA" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
