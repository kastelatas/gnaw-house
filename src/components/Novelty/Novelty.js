import React from 'react';
import Slider from "react-slick";
import Button from "../Button/Button";
import * as url from "url";

const Novelty = () => {

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrow: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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

  const sliderItem = [
    {
      id: 1,
      imgPath: "./img/slider-item.png",
      title: "Elf Pup Christmas Dog Costume1"
    },
    {
      id: 2,
      imgPath: "./img/slider-item.png",
      title: "Elf Pup Christmas Dog Costume2"
    },
    {
      id: 3,
      imgPath: "./img/slider-item.png",
      title: "Elf Pup Christmas Dog Costume3"
    },
    {
      id: 4,
      imgPath: "./img/slider-item.png",
      title: "Elf Pup Christmas Dog Costume4"
    },
    {
      id: 5,
      imgPath: "./img/slider-item.png",
      title: "Elf Pup Christmas Dog Costume5"
    },
  ]


  return (
    <div className="novelty">
      <div className="container">
        <h2 className="novelty__title h2-title">Новинки</h2>
        <Slider {...settings} className="novelty-slider">
          {
            sliderItem.map((item, i) => {
              return (
                <div className="novelty-slider__item" key={i}>
                  <img src={item.imgPath} alt="" className="image"/>
                  <p className="title">{item.title}</p>
                  <Button name="Детальніше >" btnClass="btn__novelty"/>
                </div>
              )
            })
          }
        </Slider>
      </div>
    </div>
  );
};


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style}}
      onClick={onClick}
    />
  );
}
export default Novelty;