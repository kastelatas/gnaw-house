import React from 'react';
import MainLayout from "../src/components/layouts/MainLayout";
import PaymentMethod from "../src/components/PaymentMethod/PaymentMethod";
import FormInput from "../src/components/UI/FormInput/FormInput";
import FormTextArea from "../src/components/UI/FormTextArea/FormTextArea";
import {Button} from "../src/components/Button/Button";
import Counter from "../src/components/Counter/Counter";
import SVG from "react-inlinesvg";

const basketArray = [1,1,1,1,1,1,1,1]

const Checkout = () => {
    return (
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
                        basketArray.map((item , index) => {
                          return (
                            <div className="checkout__basket-item" key={index}>
                              <img className="checkout__basket-img" src="/img/slider-item.png" />
                              <div className="column">
                                <p className="checkout__basket-item__title">Elf Pup Christmas Dog Costume</p>
                                <div className="row flex-jc-sb">
                                  <Counter/>
                                  <p className="checkout__basket-item__count">900 грн</p>
                                </div>
                              </div>
                              <SVG className="delete-icon" src="/icons/delete-icon.svg"/>
                            </div>
                          )
                        })
                      }
                    </div>
                    <div className="checkout__basket-all-price">
                      <p>Всього до сплати:</p>
                      <p>900грн</p>
                    </div>
                  </div>
                </div>
               </div>
             </div>
           </div>
        </MainLayout>
    );
};

export default Checkout;