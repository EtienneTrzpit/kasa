import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner2 from "../components/Banner2";
import MainAbout from "../components/MainAbout";

export default function About() {
  return (
    <>
      <Header />
      <main className="mainAbout">
        <Banner2 />
        <MainAbout />
      </main>
      <Footer />
    </>
  );
}
