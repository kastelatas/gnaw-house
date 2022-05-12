import React from 'react';
import SVG from "react-inlinesvg";

const Goals = () => {

  const goals = [
    {
      id: 1,
      imgPath: "./icons/sewing-machine.svg",
      text: `<span >Власне виробництво</span><br>
            Ніякого перепродажу з Aliexpress.`
    },
    {
      id: 2,
      imgPath: "./icons/tissue-roll-outline.svg",
      text: `<span >Лише якісна тканина</span> <br>
             Ніяких дешевих аналогів.`
    },
    {
      id: 3,
      imgPath: "./icons/graphic-design.svg",
      text: `<span > Унікальний дизайн </span> <br>
              Ми не робимо як у всіх.`
    },
    {
      id: 4,
      imgPath: "./icons/box.svg",
      text: `<span >Швидка доставка </span> <br>
              2-3 дні і замовлення вже у тебе.`
    }
  ]

  return (
    <section className="goals">
      <div className="container">
        <h2 className="goals__title h2-title">
          Чому наші домівки топові?
        </h2>
      </div>
      <div className="goals__bg">
        <div className="goals__list">
          {
            goals.map((item, i) => {
              return (
                <div className="goals__item" key={i}>
                  <SVG src={item.imgPath}/>
                  <p className="text" dangerouslySetInnerHTML={{__html: `${item.text}`}}></p>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  );
};

export default Goals;