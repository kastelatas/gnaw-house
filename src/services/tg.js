import fs from 'fs'
import Tgfancy from 'tgfancy'

export default function TG(cartInfo) {
  let token = "5407501065:AAEsYftcfk9WaGVO12JYG7JEF4dyYhVHgwc";
  let chat_id = "-656613030"

  const bot = new Tgfancy(token, {
    tgfancy: {
      feature: false,
    },
  });

  const option = {
    "parse_mode": "HTML",
  };

  let cardToFile;
  let numberOfOrder = 1;

  let cardInFile = fs.readFileSync("card.json", "utf8");
  if (cardInFile) {
    cardToFile = JSON.parse(cardInFile)
    numberOfOrder = cardToFile.length
  }

  let txt = ``
  txt += `<b>Заказ №:</b> ${numberOfOrder} \n`
  txt += `<b>Способ оплаты:</b> ${cartInfo.paymentMethod} \n`
  txt += `<b>Имя:</b> <i>${cartInfo.name}</i> \n`
  txt += `<b>Фамилия:</b> <i>${cartInfo.secondName}</i> \n`
  txt += `<b>Email:</b> ${cartInfo.mail} \n`
  txt += `<b>Телефон:</b> ${cartInfo.phone} \n`
  txt += `<b>Город:</b> ${cartInfo.city} \n`
  txt += `<b>Номер отеделния:</b> ${cartInfo.numberOfPost} \n`
  txt += `<b>Комментарий:</b> ${cartInfo.comment} \n`

  for (let i = 0; i < cartInfo.cart.length; i++) {
    txt += `\n`
    txt += `❣️<b>Продукт:</b> ${cartInfo.cart[i].title} \n`
    txt += `🐁 <b>Кол-во:</b> ${cartInfo.cart[i].count} \n`
    txt += `🔹 <b>Цвет:</b> ${cartInfo.cart[i].color} \n`
    txt += `🔹 <b>Размер:</b> ${cartInfo.cart[i].size} \n`
    txt += `🔹 <b>Цена:</b> ${cartInfo.cart[i].price} грн \n`
  }

  txt += `\n`
  txt += `💵 <b>Всего к оплате:</b> ${cartInfo.price} грн`


  cardToFile.push(cartInfo)
  fs.writeFileSync("card.json", JSON.stringify(cardToFile));

  bot.sendMessage(chat_id, txt, option);

}