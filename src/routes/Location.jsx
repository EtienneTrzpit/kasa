import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerLocation from "../components/BannerLocation";
import MainLocation from "../components/MainLocation";
import { useParams } from "react-router-dom";

export default function Location() {
  let { id } = useParams();
  return (
    <>
      <Header />
      <main>
        <BannerLocation />
        <MainLocation name={id} />
      </main>
      <Footer />
    </>
  );
}
