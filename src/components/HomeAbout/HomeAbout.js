import React from 'react';
import Image from "next/image";

const HomeAbout = () => {
  return (
    <div className="home-about">
      <div className="container">
        <h2 className="title h2-title">Про нас</h2>
        <div className="row">
          <div className="home-about__content">
            <div className="home-about__block">
              <img src="./img/anna.png" alt=""/>
              <p className="title">Ганна Мулик</p>
              <p className="descr">Справжня фея тканин та фурнітури. Мама двох крис, двох котів та дегунихи.</p>
            </div>
            <div className="home-about__block">
              <img src="./img/lisa.png" alt=""/>
              <p className="title">Ліза Лагода</p>
              <p className="descr">Вічний генератор ідей. Мама двох крис та чотирьох котів.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;