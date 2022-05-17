import Banner from "../src/components/Banner/Banner";
import Novelty from "../src/components/Novelty/Novelty";
import Goals from "../src/components/Goals/Goals";
import HomeAbout from "../src/components/HomeAbout/HomeAbout";
import MainLayout from "../src/components/layouts/MainLayout";
import {getProducts} from "../src/redux/actions/products";
import {wrapper} from "../src/redux/store";
import {useSelector} from "react-redux";
import Basket from "../src/components/modals/Basket";


const Home = () => {
  const {products} = useSelector(store => store)

  return (
    <MainLayout title="Головна">
      <div className="home">
        <Banner/>
        <Novelty/>
        <Goals/>
        <HomeAbout/>
      </div>
    </MainLayout>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async () => {
  await store.dispatch(getProducts());
});


export default Home