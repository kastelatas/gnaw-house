import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';

const ProductSlider = ({images}) => {
  return (
    <Carousel
      showArrows={false}
      showIndicators={false}
      showStatus={false}
      className="product-slider"
    >
      {
        images.map(image => {
          return (
            <div className="product-slider__slide" key={image.id}>
              <img src={image.path}/>
            </div>
          )
        })
      }
    </Carousel>
  );
};

export default ProductSlider;