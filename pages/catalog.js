import React from 'react';
import {wrapper} from "../src/redux/store";
import {getProducts} from "../src/redux/actions/products";
import MainLayout from "../src/components/layouts/MainLayout";
import LeftSideBar from "../src/components/LeftSideBar/LeftSideBar";
import ProductList from "../src/components/ProductList/ProductList";
import Sorting from "../src/components/Sorting/Sorting";
import {useSelector} from "react-redux";
import Loader from "../src/components/Loader/Loader";
import {ButtonWithIcon} from "../src/components/Button/Button";

const Catalog = () => {
  const {products} = useSelector(state => state.products)

  return (
    <MainLayout title="Каталог">
      <div className="catalog">
        <div className="container">
          <div className="row">
            <LeftSideBar/>
            <div className="catalog__wrapper">
              <div className="row flex-ai-c">
                <ButtonWithIcon name="Фільтри" icon={"/icons/filter.svg"} btnClass="catalog__filter-btn"/>
                <Sorting/>
              </div>
              {
                products.length
                  ? <ProductList products={products}/>
                  : <Loader/>
              }
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