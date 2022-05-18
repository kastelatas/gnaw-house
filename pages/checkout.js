import React, {useEffect, useState} from 'react';
import MainLayout from "../src/components/layouts/MainLayout";
import PaymentMethod from "../src/components/PaymentMethod/PaymentMethod";
import FormInput from "../src/components/UI/FormInput/FormInput";
import FormTextArea from "../src/components/UI/FormTextArea/FormTextArea";
import {Button} from "../src/components/Button/Button";
import Counter from "../src/components/Counter/Counter";
import SVG from "react-inlinesvg";
import {useDispatch, useSelector} from "react-redux";
import {decreaseQuantity, deleteFromCart, increaseQuantity} from "../src/redux/actions/cart";
import {useRouter} from "next/router";
import {wrapper} from "../src/redux/store";
import {getProductByID, getProducts} from "../src/redux/actions/products";


const Checkout = () => {
  const router = useRouter();

  const dispatch = useDispatch()
  const {cart, price} = useSelector(state => state.cart)

  const [count, setCount] = useState()

  const countHandler = (count) => {
    setCount(count)
  }

  const minusNumber = (indx) => {
    dispatch(decreaseQuantity(indx))
  }

  const plusNumber = (indx) => {
    dispatch(increaseQuantity(indx))
  }

  const deleteProduct = (indx) => {
    dispatch(deleteFromCart(indx))
  }

  useEffect(() => {
    if (!cart.length) {
      router.push('/')
    }
  }, [cart])


  return (
    <>
      {
        cart.length &&
        <MainLayout title="Оплата">
          <div className="checkout">
            <div className="container">
              <div className="row flex-jc-sb">
                <div className="checkout__form">
                  <p className="checkout__form-title">Оплата</p>
                  <div className="row">
                    <PaymentMethod icon="/icons/cash-payment.svg" method="Часткова оплата"/>
                    <PaymentMethod icon="/icons/card-payment.svg" method="Сплатити онлайн"/>
                  </div>
                  <p className="checkout__form-title">Інформація про доставку</p>
                  <form>
                    <div className="row">
                      <FormInput inputID="name" labelName="Ім’я*"/>
                      <FormInput inputID="lastname" labelName="Прізвище*"/>
                    </div>
                    <div className="row">
                      <FormInput inputID="email" labelName="Електронна адреса*"/>
                      <FormInput inputID="phone" labelName="Номер телефону*"/>
                    </div>
                    <div className="row">
                      <FormInput inputID="city" labelName="Місто доставки*"/>
                      <FormInput inputID="branch" labelName="№ Відділення нової пошти*"/>
                    </div>
                    <div className="row">
                      <FormTextArea labelName="Коментар до замовлення" textareaID="comment"/>
                    </div>
                    <Button name="Замовити"/>
                  </form>
                </div>
                <div className="checkout__basket">
                  <div className="checkout__basket-container">
                    <div className="checkout__basket-item-list">
                      {
                        cart.map((product, index) => {
                          return (
                            <div className="checkout__basket-item" key={index}>
                              <img className="checkout__basket-img" src="/img/slider-item.png"/>
                              <div className="column">
                                <p className="checkout__basket-item__title">Elf Pup Christmas Dog Costume</p>
                                <div className="row flex-jc-sb">
                                  <div className="counter">
                                    <div className="counter__content">
                                      <div className="counter__minus" onClick={() => minusNumber(index)}>-</div>
                                      <div className="counter__num">{product.count}</div>
                                      <div className="counter__plus" onClick={() => plusNumber(index)}>+</div>
                                    </div>
                                  </div>
                                  <p className="checkout__basket-item__count">{product.price * product.count} грн</p>
                                </div>
                              </div>
                              <SVG className="delete-icon" src="/icons/delete-icon.svg" onClick={() => deleteProduct(product.productId)}/>
                            </div>
                          )
                        })
                      }
                    </div>
                    <div className="checkout__basket-all-price">
                      <p>Всього до сплати:</p>
                      <p>{price}грн</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MainLayout>
      }
    </>
  );
};

export default Checkout;