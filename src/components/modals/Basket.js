import React from 'react';
import Link from "next/link";
import SVG from "react-inlinesvg";
import {useDispatch} from "react-redux";
import Modal from "./Modal";
import Counter from "../Counter/Counter";
import {closeModal} from "../../redux/actions/modals";

const Basket = () => {
  const dispatch = useDispatch();

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
              <div className="basket-product">
                <div className="col-1">
                  <div className="row">
                    <div className="basket-product__img">
                      <img src="/img/product-img-basket.jpg" alt=""/>
                    </div>
                    <div className="title-wrapper">
                      <div className="basket-product__title">Квадрат `Хмаринки`</div>
                      <div className="basket-product__subtitle">Блакитний</div>
                    </div>
                  </div>
                </div>
                <div className="col-2">
                  <div className="basket-product__price">235 грн</div>
                </div>
                <div className="col-3">
                  <div className="basket-product__count"><Counter/></div>
                </div>
                <div className="col-4">
                  <div className="basket-product__sum">235 грн</div>
                </div>
                <div className="col-5">
                  <div className="product__delete">
                    <SVG src={'/icons/close-modal.svg'}/>
                  </div>
                </div>
              </div>
            </div>
            <div className="table-footer">
              <div className="row flex-jc-sb flex-ai-c">
                <div
                  className="back-to-products"
                  onClick={() => dispatch(closeModal())}
                >
                  Повернутись до покупок
                </div>
                <div className="checkout-block">
                  <div className="products-sum">
                    <p className="products-sum-title">Сумма замовлення</p>
                    <p className="products-sum-count">670 грн</p>
                  </div>
                  <div onClick={() => dispatch(closeModal())}>
                    <Link href="/checkout">
                      <a className="btn">Оформити замовлення</a>
                    </Link>
                  </div>
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