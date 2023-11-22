import Header from "../components/Header";
import Footer from "../components/Footer";
import MainLocation from "../components/MainLocation";

export default function Location() {
  return (
    <>
      <Header />
      <main className="main-location">
        <MainLocation />
      </main>
      <Footer />
    </>
  );
}
