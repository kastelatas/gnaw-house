import React from 'react';
import Link from "next/link";


const Product = ({product}) => {
  return (
    <div className="product">
      <div className="product__content">
        <img src={product.imgPath} alt="" className="product__img"/>
        <p className="product__title">{product.title}</p>
        <p className="product__descr">{product.descr}</p>
        <div className="product__footer">
          <p className="product__price">{product.price} грн</p>
          <Link href={`/product/${product.id}`}>
            <a className="btn">Купити</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;