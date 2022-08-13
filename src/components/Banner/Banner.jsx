import React from 'react';
import Link from "next/link";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__content">
        <div className="left-side">
          <h1 className="banner__title">Топові домівки для гризунів</h1>
          <p className="banner__text">Гамаки, вігвами та квадрати - усе в декількох розмірах </p>
          <Link href="/catalog">
            <a className="btn">Детальніше &gt;</a>
          </Link>
        </div>
        <div className="right-side">
          <img src="./img/home_top_img.svg" className="banner__image" />
          <img src="./img/home_top_img-mob.svg" alt="" className="banner__image-mob" />
        </div>
      </div>
    </div>
  );
};

export default Banner;