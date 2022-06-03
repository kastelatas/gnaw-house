import React, {useEffect, useState} from 'react';
import Link from "next/link";
import { useRouter } from 'next/router'
import Slider from "react-slick";
import {wrapper} from "../../src/redux/store";
import {useDispatch, useSelector} from "react-redux";
import {getProductByID, getProducts} from "../../src/redux/actions/products";
import {addToCart} from "../../src/redux/actions/cart";
import MainLayout from "../../src/components/layouts/MainLayout";
import ProductSlider from "../../src/components/ProductSlider/ProductSlider";
import Loader from "../../src/components/Loader/Loader";
import RadioButton from "../../src/components/UI/RadioButton/RadioButton";
import Counter from "../../src/components/Counter/Counter";
import {ButtonWithIcon} from "../../src/components/Button/Button";

const Product = () => {

  const router = useRouter()

  const dispatch = useDispatch();
  const {product, products} = useSelector(state => state.products)

  const [count, setCount] = useState(1)
  const [size, setSize] = useState(product.sizes[0])
  const [color, setColor] = useState(product.colors[0].color)
  const [productPrice, setProductPrice] = useState(0)

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrow: true,
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 641,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  }

  const addToCartHandler = (product) => {
    let productCopy = {
      ...product,
      count: count,
      size: size.name,
      color: color,
      price: productPrice,
      productId: Date.now()
    }
    dispatch(addToCart(productCopy))
  }

  const countHandler = (count) => {
    setCount(count)
  }

  const sizeHandler = (size) => {
    console.log('setSize', size)
    setSize(size)
  }

  const colorHandler = (color) => {
    setColor(color)
  }

  useEffect(() => {
    console.log(product.prices[size.id - 1])
    setProductPrice(product.prices[size.id - 1].price)
  }, [size])

  useEffect(() => {
    setCount(1)
  }, [router])

  if (!Object.keys(product).length) {
    return <Loader/>
  }

  return (
    <MainLayout title={product.title}>
      <div className="product-page">
        <div className="container">
          <div className="row">
            <div className="product-page__slider">
              {
                product.images && <ProductSlider images={product.images}/>
              }
            </div>
            <div className="product-page__info">
              <div className="title">{product.title}</div>
              <div className="descr"><span>Опис: </span>{product.descr}</div>
              <div className="product-page__size">
                <p className="title">Розміри:</p>
                <div className="row">
                  {
                    product.sizes.map((size, inx) => {
                      return (
                        <RadioButton
                          key={inx}
                          id="product-size"
                          size={size}
                          name={size.name}
                          labelName={size.name}
                          checked={size.checked}
                          clickHandler={sizeHandler}
                        />
                      )
                    })
                  }
                </div>
              </div>
              <div className="product-page__color">
                <p className="title">Колір:</p>
                <div className="row">
                  {
                    product.colors.map((color, inx) => {
                      return (
                        <RadioButton
                          key={inx}
                          id="product-color"
                          name={color.color}
                          checked={color.checked}
                          labelName={color.color}
                          clickHandler={colorHandler}
                        />
                      )
                    })
                  }
                </div>
              </div>
              <div className="product-page__price">
                <p className="title">Ціна:</p>
                <div className="column">
                  <p className="old-price">{productPrice + 100} грн</p>
                  <p className="new-price">{productPrice} грн</p>
                </div>
              </div>
              <div className="product-page__count">
                <div className="row flex-ai-c">
                  <p className="title">Кількість:</p>
                  <Counter countHandler={countHandler} count={count}/>
                  <ButtonWithIcon
                    name="Купити"
                    icon="/icons/basket.svg"
                    onHandleClick={() => addToCartHandler(product)}/>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="product-page__payment">
              <p className="title">Оплата:</p>
              <p className="descr">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                and
                scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="product-page__delivery">
              <p className="title">Доставка:</p>
              <p className="descr">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                and
                scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="also-buy">
              <p className="title">Також купують:</p>
              <div className="also-buy__slider">
                <Slider {...settings} className="also-buy-slider">
                  {
                    products.length
                      ? products.map((item, i) => {
                        return (
                          <div className="also-buy-slider__item" key={i}>
                            <img src={item.imgPath} alt="" className="image"/>
                            <div className="wrap">
                              <p className="title">{item.title}</p>
                              <p className="descr">{item.descrShort}</p>
                              <div className="price-block">
                                <p className="price">Ціна: {item.price}грн</p>
                                <Link href="/product/[id]" as={`/product/${item.id}`} passHref replace>
                                  <a>
                                    <ButtonWithIcon icon="/icons/basket.svg" name="Купити" btnClass="btn__novelty"/>
                                  </a>
                                </Link>
                              </div>
                            </div>
                          </div>
                        )
                      })
                      : <Loader/>
                  }
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};


export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx) => {
  await store.dispatch(getProductByID(Number(ctx.query.id)));
  await store.dispatch(getProducts());
});

export default Product;

