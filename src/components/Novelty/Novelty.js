import React from 'react';
import { useSelector} from "react-redux";
import Link from "next/link";
import Slider from "react-slick";
import {Button} from "../Button/Button";
import Loader from "../Loader/Loader";

const Novelty = () => {
  const {products} = useSelector(store => store.products)

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrow: true,
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>,
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 641,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  };

  return (
    <div className="novelty">
      <div className="container">
        <h2 className="novelty__title h2-title">Новинки</h2>
        <Slider {...settings} className="novelty-slider">
          {
            products.length
              ? products.map((item, i) => {
                return (
                  <div className="novelty-slider__item" key={i}>
                    <img src={item.imgPath} alt="" className="image"/>
                    <p className="title">{item.title}</p>
                    <Link href={`/product/${item.id}`} passHref>
                      <a>
                        <Button name="Детальніше >" btnClass="btn__novelty"/>
                      </a>
                    </Link>
                  </div>
                )
              })
              : <Loader/>
          }
        </Slider>
      </div>
    </div>
  );
};


function SampleNextArrow(props) {
  const {className, style, onClick} = props;
  return (
    <div
      className={className}
      style={{...style}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const {className, style, onClick} = props;
  return (
    <div
      className={className}
      style={{...style}}
      onClick={onClick}
    />
  );
}


export default Novelty;