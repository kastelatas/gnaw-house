import Header from '../src/components/Header/Header';
import Button from "../src/components/Button/Button";
import Banner from "../src/components/Banner/Banner";
import Novelty from "../src/components/Novelty/Novelty";
import Goals from "../src/components/Goals/Goals";
import Footer from "../src/components/Footer/Footer";
import HomeAbout from "../src/components/HomeAbout/HomeAbout";

export default function Home() {
  return (
    <div className="home">
      <Header/>
      <section className="home__banner">
        <Banner/>
      </section>
      <Novelty/>
      <Goals/>
      <HomeAbout/>
      <Footer/>
    </div>
  )
}
