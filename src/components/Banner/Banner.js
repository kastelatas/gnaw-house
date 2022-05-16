import React from 'react';
import Button from "../Button/Button";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__content">
        <div className="left-side">
          <h1 className="banner__title">Топові домівки для гризунів</h1>
          <p className="banner__text">Гамаки, вігвами та квадрати - усе в декількох розмірах </p>
          <Button name={'Детальніше >'}/>
        </div>
        <div className="right-side">
          <Image src="./img/home_top_img.svg" alt="" className="banner__image"/>
          <Image src="./img/home_top_img-mob.svg" alt="" className="banner__image-mob"/>
        </div>
      </div>
    </div>
  );
};

export default Banner;