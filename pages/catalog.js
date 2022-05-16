import React from 'react';
import {wrapper} from "../src/redux/store";
import {getProducts} from "../src/redux/actions/products";
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";

const Catalog = (props) => {

  return (
    <div className="catalog">
      <Header/>
      Catalog
      <Footer/>
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(store => async () => {
  await store.dispatch(getProducts());
});


export default Catalog;