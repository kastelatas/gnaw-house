import React, {useEffect, useState} from 'react';
import Link from "next/link";
import SVG from "react-inlinesvg";
import {useDispatch, useSelector} from "react-redux";
import Modal from "./Modal";
import Counter from "../Counter/Counter";
import {closeModal} from "../../redux/actions/modals";
import {decreaseQuantity, deleteFromCart, increaseQuantity} from "../../redux/actions/cart";

const Basket = () => {
  const dispatch = useDispatch();
  const {cart, price} = useSelector(state => state.cart)
  const [count, setCount] = useState(0)


  const minusNumber = (indx) => {
    dispatch(decreaseQuantity(indx))
  }

  const plusNumber = (indx) => {
    dispatch(increaseQuantity(indx))
  }

  const deleteProduct = (productId) => {
    dispatch(deleteFromCart(productId))
  }


  return (
    <Modal title={'Товари у кошику'}>
      <div className="basket-modal">
        <div className="basket-modal__content">
          <div className="basket-table">
            <div className="basket-table-header">
              <div className="row-flex">
                <div className="title col-1">Товар</div>
                <div className="title col-2">Ціна</div>
                <div className="title col-3">Кількість</div>
                <div className="title col-4">Сумма</div>
              </div>
            </div>
            <div className="basket-table-content">
              {
                cart.map((product, indx) => {
                  return (
                    <div className="basket-product" key={indx}>
                      <div className="col-1">
                        <div className="row-flex">
                          <div className="basket-product__img">
                            <img src={product.imgPath} alt=""/>
                          </div>
                          <div className="title-wrapper">
                            <Link href={`/product/${product.id}`} passHref>
                              <div className="basket-product__title">
                                {product.title}
                              </div>
                            </Link>
                            <div className="basket-product__subtitle">Розмір: {product.size}</div>
                            <div className="basket-product__subtitle">Колір: {product.color}</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-2">
                        <div className="basket-product__price">{product.price} грн</div>
                      </div>
                      <div className="col-3">
                        <div className="basket-product__count">
                          <div className="counter">
                            <div className="counter__content">
                              <div className="counter__minus" onClick={() => minusNumber(indx)}>-</div>
                              <div className="counter__num">{product.count}</div>
                              <div className="counter__plus" onClick={() => plusNumber(indx)}>+</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="basket-product__sum">{product.price * product.count} грн</div>
                      </div>
                      <div className="col-5">
                        <div className="basket-product__delete" onClick={() => {
                          deleteProduct(product.productId)
                        }}>
                          <SVG src={'/icons/close-modal.svg'}/>
                        </div>
                      </div>
                    </div>
                  )
                })
              }

            </div>
            <div className="basket-table-footer">
              <div className="row-flex flex-jc-sb flex-ai-c">
                <div
                  className="back-to-products"
                  onClick={() => dispatch(closeModal())}
                >
                  Повернутись до покупок
                </div>
                <div className="checkout-block">
                  <div className="products-sum">
                    <p className="products-sum-title">Сумма замовлення</p>
                    <p className="products-sum-count">{price} грн</p>
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