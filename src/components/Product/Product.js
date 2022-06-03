import React from 'react';
import Link from "next/link";


const Product = ({product}) => {
  return (
    <div className="product">
      <div className="product__content">
        <img src={product.imgPath} alt="" className="product__img"/>
        <p className="product__title">{product.title}</p>
        <p className="product__descr">{product.descrShort}</p>
        <div className="product__footer">
          <p className="product__price">{product.prices && product.prices[0].price} грн</p>
          <Link href={`/product/${product.id}`}>
            <a className="btn">Купити</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;