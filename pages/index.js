import Banner from "../src/components/Banner/Banner";
import Novelty from "../src/components/Novelty/Novelty";
import Goals from "../src/components/Goals/Goals";
import HomeAbout from "../src/components/HomeAbout/HomeAbout";
import MainLayout from "../src/components/layouts/MainLayout";
import {getProducts} from "../src/redux/actions/products";
import {wrapper} from "../src/redux/store";
import React from "react";

const Home = () => {

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