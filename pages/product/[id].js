import React from 'react';
import MainLayout from "../../src/components/layouts/MainLayout";
import {wrapper} from "../../src/redux/store";
import {getProductByID} from "../../src/redux/actions/products";
import {useSelector} from "react-redux";

const Product = () => {
  const {product} = useSelector(state => state.products)
    return (
        <MainLayout title={product.title}>
            <div className="container">
              <div className="row">
                Product {product.title}
              </div>
            </div>
        </MainLayout>
    );
};


export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx) => {
  await store.dispatch(getProductByID(Number(ctx.query.id)));
});

export default Product;

