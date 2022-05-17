import React from 'react';

const Product = ({product}) => {
  return (
    <div className="product">
      {product.title}
    </div>
  );
};

export default Product;