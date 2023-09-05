import "../assets/style/footer.scss";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-container__logo">
        <img src={process.env.PUBLIC_URL + "/logo-white.svg"} alt="kasa" />
      </div>
      <p className="footer-container__copyrights">
        © 2020 Kasa. All rights reserved
      </p>
    </footer>
  );
}
