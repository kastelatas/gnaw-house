import React from 'react';
import Link from "next/link";
import Input from "../UI/Input/Input";
import {Button} from "../Button/Button";
import SVG from "react-inlinesvg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row flex-jc-sb">
          <div className="footer__col">
            <div className="title">Про компанію</div>
            <Link href="/">Про нас</Link>
            <Link href="/">Відгуки</Link>
            <Link href="/">Співпраця</Link>
          </div>
          <div className="footer__col">
            <div className="title">Інформація</div>
            <Link href="/">Оплата та доставка</Link>
            <Link href="/">Повернення товарів</Link>
            <Link href="/">Політика конфіденційності</Link>
          </div>
          <div className="footer__col">
            <div className="title">Контакти</div>
            <Link href="tel:0984625182">098 462  51 82</Link>
            <Link href="mailto:hryzukhatu@gmail.com">hryzukhatu@gmail.com</Link>
          </div>
          <div className="footer__col">
            <div className="title ">Підпишіться на нашу розсилку</div>
            <div className="row">
              <Input placeholder={"Ваш E-mail"}/>
              <Button name="Підписатись"/>
            </div>
            <div className="follow-block">
              <Link href="/"><SVG src="/icons/insta.svg"/></Link>
              <Link href="/"><SVG src="/icons/fb.svg"/></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;