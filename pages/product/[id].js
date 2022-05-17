import React from 'react';
import MainLayout from "../../src/components/layouts/MainLayout";
import {wrapper} from "../../src/redux/store";
import {getProductByID, getProducts} from "../../src/redux/actions/products";
import {useSelector} from "react-redux";
import ProductSlider from "../../src/components/ProductSlider/ProductSlider";
import Loader from "../../src/components/Loader/Loader";
import RadioButton from "../../src/components/UI/RadioButton/RadioButton";
import Counter from "../../src/components/Counter/Counter";
import {Button, ButtonWithIcon} from "../../src/components/Button/Button";
import Novelty from "../../src/components/Novelty/Novelty";
import Slider from "react-slick";
import Link from "next/link";

const Product = () => {
  const {product, products} = useSelector(state => state.products)

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
                  <RadioButton id="product-size" name="S(15x15x15)" labelName="S(15x15x15)"/>
                  <RadioButton id="product-size" name="S(12x12x12)" labelName="S(12x12x12)"/>
                  <RadioButton id="product-size" name="S(11x11x11)" labelName="S(11x11x11)"/>
                </div>
              </div>
              <div className="product-page__color">
                <p className="title">Колір:</p>
                <div className="row">
                  <RadioButton checked={true} id="product-color" name="Білий (чорний, блакитний)"
                               labelName="Білий (чорний, блакитний)"/>
                </div>
              </div>
              <div className="product-page__price">
                <p className="title">Ціна:</p>
                <div className="column">
                  <p className="old-price">495 грн</p>
                  <p className="new-price">395 грн</p>
                </div>
              </div>
              <div className="product-page__count">
                <div className="row flex-ai-c">
                  <p className="title">Кількість:</p>
                  <Counter/>
                  <ButtonWithIcon name="Купити" icon="/icons/basket.svg"/>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="product-page__payment">
              <p className="title">Оплата:</p>
              <p className="descr">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="product-page__delivery">
              <p className="title">Доставка:</p>
              <p className="descr">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
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
                               <Link href={`/product/${item.id}`} passHref>
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

