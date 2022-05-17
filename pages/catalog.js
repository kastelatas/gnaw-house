import React from 'react';
import {wrapper} from "../src/redux/store";
import {getProducts} from "../src/redux/actions/products";
import MainLayout from "../src/components/layouts/MainLayout";
import LeftSideBar from "../src/components/LeftSideBar/LeftSideBar";
import ProductList from "../src/components/ProductList/ProductList";
import Sorting from "../src/components/Sorting/Sorting";

const Catalog = (props) => {

  return (
    <MainLayout title="Каталог">
      <div className="catalog">
       <div className="container">
        <div className="row">
          <LeftSideBar/>
          <div className="catalog__wrapper">
            <Sorting/>
            <ProductList/>
          </div>
        </div>
       </div>
      </div>
    </MainLayout>

  );
};

export const getServerSideProps = wrapper.getServerSideProps(store => async () => {
  await store.dispatch(getProducts());
});


export default Catalog;