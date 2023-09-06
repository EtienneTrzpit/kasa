import Header from "../components/Header";
import Banner from "../components/Banner";
import MainHome from "../components/MainHome";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <MainHome />
      </main>
      <Footer />
    </>
  );
}