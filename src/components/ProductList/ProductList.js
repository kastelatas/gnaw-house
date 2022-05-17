import React from 'react';
import {useSelector} from "react-redux";
import Product from "../Product/Product";

const ProductList = () => {
  const {products} = useSelector(state => state.products)

  return (
    <div className="product-list">
      {
        products.map((product, index) => {
          return (
            <Product product={product} key={index}/>
          )
        })
      }
    </div>
  );
};

export default ProductList;