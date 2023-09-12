import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerLocation from "../components/BannerLocation";
import MainLocation from "../components/MainLocation";

export default function Location() {
  return (
    <>
      <Header />
      <main>
        <BannerLocation />
        <MainLocation />
      </main>
      <Footer />
    </>
  );
}
