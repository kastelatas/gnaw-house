import React, {useEffect, useState} from 'react';
import MainLayout from "../src/components/layouts/MainLayout";
import PaymentMethod from "../src/components/PaymentMethod/PaymentMethod";
import FormInput from "../src/components/UI/FormInput/FormInput";
import FormTextArea from "../src/components/UI/FormTextArea/FormTextArea";
import {Button} from "../src/components/Button/Button";
import SVG from "react-inlinesvg";
import {useDispatch, useSelector} from "react-redux";
import {decreaseQuantity, deleteFromCart, increaseQuantity} from "../src/redux/actions/cart";
import {useRouter} from "next/router";
import CustomSelect from "../src/components/CustomSelect/CustomSelect";
import Select from "react-select";
import AsyncSelect from 'react-select/async'
import Np from "../src/services/NP/np";


const Checkout = () => {
  const router = useRouter();

  const dispatch = useDispatch()
  const {cart, price} = useSelector(state => state.cart)
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [comment, setComment] = useState('')
  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: 1,
      icon: "/icons/cash-payment.svg",
      method: "Часткова оплата",
      checked: true
    },
    {
      id: 2,
      icon: "/icons/card-payment.svg",
      method: "Сплатити онлайн",
      checked: false
    }
  ])
  const [checkPaymentMethod, setCheckPaymentMethod] = useState(paymentMethods[0])
  const [selectedCity, setSelectedCity] = useState({value: '', label: ''})
  const [selectedBranch, setSelectedBranch] = useState({})
  const [citySelect, setCitySelect] = useState([])
  const [branchSelect, setBranchSelect] = useState([])

  const checkedPaymentMethod = (id) => {
    let paymentMethodsMap = paymentMethods.map(paymentMethod => {

      paymentMethod.checked = paymentMethod.id === id
      paymentMethod.checked && setCheckPaymentMethod(paymentMethod)

      return paymentMethod
    })
    setPaymentMethods([...paymentMethodsMap])
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

  const sendMessageHandle = async (e) => {
    e.preventDefault()

    let cartInfo = {
      paymentMethod: checkPaymentMethod.method,
      name: name,
      secondName: lastName,
      mail: email,
      phone: phone,
      city: selectedCity.value,
      numberOfPost: selectedBranch.value,
      comment: comment,
      cart: cart,
      price: price
    }
    console.log(cartInfo)
    await fetch(`http://localhost:3000/api/tg`, {
      method: 'POST',
      body: JSON.stringify(cartInfo)
    })
  }

  useEffect(() => {
    // if (!cart.length) {
    //   router.push('/')
    // }

    let cityArr = []
    Np.getCities(cities => {
      cities.data.map(city => {
        return cityArr.push({
          value: city.Description,
          label: city.Description
        })
      })
      setCitySelect(cityArr)
    }, {Limit: 100})

  }, [])


  useEffect(() => {
    loadBranch(selectedCity.value)
  }, [selectedCity])

  const handleChange = (selectedOption) => {
    setSelectedCity(selectedOption)
  };

  const handleChangeBranch = (selectedOption) => {
    setSelectedBranch(selectedOption)
  };

  const loadOptions = (inputValue, callback) => {
    callback(loadCity(inputValue));
  };

  const loadCity = (inputValue) => {
    let props = {
      FindByString: inputValue,
      Limit: 1000
    }
    let cityArr = []
    Np.getCities(cities => {
      cities.data.map(city => {
        return cityArr.push({
          value: city.Description,
          label: city.Description
        })
      })
      setCitySelect(cityArr)
    }, props)

    return cityArr
  }

  const loadBranch = (inputValue) => {
    let props = {
      CityName: selectedCity.value,
      Limit: 1000
    }
    let branchesArr = []
    Np.getWarehouses(branches => {
      console.log('branches', branches)
      branches.data.map(branch => {
        return branchesArr.push({
          value: branch.Description,
          label: branch.Description
        })
      })
      setBranchSelect(branchesArr)
    }, props)

    return branchesArr
  }

  return (
    <>
      <MainLayout title="Оплата">
        <div className="checkout">
          <div className="container">
            <div className="row flex-jc-sb">
              <div className="checkout__form">
                <p className="checkout__form-title">Оплата</p>
                <div className="row">
                  {
                    paymentMethods.map(paymentMethod => {
                      return <PaymentMethod
                        key={paymentMethod.id}
                        id={paymentMethod.id}
                        icon={paymentMethod.icon}
                        method={paymentMethod.method}
                        isChecked={paymentMethod.checked}
                        checkedPaymentMethod={checkedPaymentMethod}
                      />
                    })
                  }
                </div>
                <p className="checkout__form-title">Інформація про доставку</p>
                <form onSubmit={sendMessageHandle}>
                  <div className="row">
                    <FormInput value={name} valueChange={(e) => setName(e.target.value)} inputID="name"
                               labelName="Ім’я*"/>
                    <FormInput value={lastName} valueChange={(e) => setLastName(e.target.value)} inputID="lastname"
                               labelName="Прізвище*"/>
                  </div>
                  <div className="row">
                    <FormInput value={email} valueChange={(e) => setEmail(e.target.value)} inputID="email"
                               labelName="Електронна адреса*"/>
                    <FormInput value={phone} valueChange={(e) => setPhone(e.target.value)} inputID="phone"
                               labelName="Номер телефону*"/>
                  </div>
                  <div className="row">
                    <div className="form-select">
                      <label htmlFor="long-value-select">Місто</label>
                      <AsyncSelect
                        className="AsyncSelect"
                        id="long-value-select2"
                        instanceId="long-value-select"
                        cacheOptions
                        clearable={true}
                        loadOptions={loadOptions}
                        components={{CustomSelect}}
                        value={selectedCity}
                        onChange={handleChange}
                        defaultOptions={citySelect}
                      />
                    </div>
                    <div className="form-select">
                      <label htmlFor="long-value-select2">№ Відділення нової пошти*</label>
                      <Select
                        className="AsyncSelect"
                        id="long-value-select2"
                        instanceId="long-value-select"
                        cacheOptions
                        isDisabled={!selectedCity.value.length}
                        clearable={true}
                        components={{CustomSelect}}
                        value={selectedBranch}
                        onChange={handleChangeBranch}
                        options={branchSelect}
                      />
                    </div>
                  </div>
                  <div className="row">

                    <FormTextArea value={comment} valueChange={(e) => setComment(e.target.value)}
                                  labelName="Коментар до замовлення" textareaID="comment"/>
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
                            <img className="checkout__basket-img" src={product.imgPath} alt=""/>
                            <div className="column w100">
                              <p className="checkout__basket-item__title">{product.title}</p>
                              <div className="row flex-jc-sb w100">
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
                            <SVG className="delete-icon" src="/icons/delete-icon.svg"
                                 onClick={() => deleteProduct(product.productId)}/>
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
    </>
  );
};

const Control = ({children, ...props}) => (
  <div {...props}>
    👍 {children}
  </div>
);

export default Checkout;