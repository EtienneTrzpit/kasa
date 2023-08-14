export default function Footer() {
  return (
    <footer className="footer__container">
      <div className="footer__container__logo">
        <img src={process.env.PUBLIC_URL + "/logo.svg"} alt="kasa" />
      </div>
      <p className="footer__container__copyrights">
        © 2020 Kasa. All rights reserved
      </p>
    </footer>
  );
}
