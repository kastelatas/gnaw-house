import React from 'react';
import SVG from 'react-inlinesvg'
import Link from 'next/link'
import {useDispatch, useSelector} from "react-redux";
import {openModal} from "../../redux/actions/modals";
import LazyLoad from "react-lazyload";

const Header = () => {
  const dispatch = useDispatch()
  const {count} = useSelector(state => state.cart)

  const openModalHandle = () => {
    dispatch(openModal())
  }

  return (
    <div className="header">
      <div className="container-wrap">
        <div className="row-flex flex-ai-c flex-jc-sb">
          <Link href="/">
            <img src="/img/logo.svg" className="logo" alt="logo"/>
          </Link>
          <div className="nav">
            <ul className="menu">
              <li className="menu__item"><Link href="/">Головна</Link></li>
              <li className="menu__item"><Link href="/about">Про нас</Link></li>
              <li className="menu__item"><Link href="/catalog">Каталог</Link></li>
              <li className="menu__item"><Link href="/contacts">Контакти</Link></li>
            </ul>
          </div>
          <div className="header__phones">
            <div className="wrapper">
              <span className="phone">098 462  51 82</span>
              <span className="phone">098 462  51 82</span>
            </div>
            <div className="header__basket" onClick={openModalHandle}>
              {
                count >= 1 && <div className="header__basket-counter">{count}</div>
              }
              <SVG src="/icons/basket.svg"/>
            </div>
          </div>
          <div className="header__mobile-title">Гризу хату</div>
          <div className="header__mobile-menu">
            <SVG src="/icons/burger-menu.svg"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;