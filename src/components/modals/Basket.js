import React from 'react';
import Modal from "./Modal";
import Counter from "../Counter/Counter";
import SVG from "react-inlinesvg";
import Button from "../Button/Button";
import Image from "next/image";

const Basket = () => {
  return (
    <Modal title={'Товари у кошику'}>
      <div className="basket-modal">
        <div className="basket-modal__content">
          <div className="table">
            <div className="table-header">
              <div className="row">
                <div className="title col-1">Товар</div>
                <div className="title col-2">Ціна</div>
                <div className="title col-3">Кількість</div>
                <div className="title col-4">Сумма</div>
              </div>
            </div>
            <div className="table-content">
              <div className="product">
                <div className="col-1">
                  <div className="row">
                    <div className="product__img">
                      <Image src="./img/product-img-basket.jpg" alt=""/>
                    </div>
                    <div className="title-wrapper">
                      <div className="product__title">Квадрат `Хмаринки`</div>
                      <div className="product__subtitle">Блакитний</div>
                    </div>
                  </div>
                </div>
                <div className="col-2">
                  <div className="product__price">235 грн</div>
                </div>
                <div className="col-3">
                  <div className="product__count"><Counter/></div>
                </div>
                <div className="col-4">
                  <div className="product__sum">235 грн</div>
                </div>
                <div className="col-5">
                  <div className="product__delete">
                    <SVG src={'/icons/close-modal.svg'}/>
                  </div>
                </div>
              </div>
            </div>
            <div className="table-footer">
              <div className="row flex-jc-sb">
                <div className="back-to-products">
                  Повернутись до покупок
                </div>
                <div className="checkout-block">
                  <div className="products-sum">
                    <p className="products-sum-title">Сумма замовлення</p>
                    <p className="products-sum-count">670 грн</p>
                  </div>
                  <Button name="Оформити замовлення" btnClass=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Basket;