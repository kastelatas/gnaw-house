import Tgfancy from 'tgfancy'

export default function TG(cartInfo) {
  let token = "5407501065:AAEsYftcfk9WaGVO12JYG7JEF4dyYhVHgwc";
  let chat_id = "-656613030"

  const bot = new Tgfancy(token, {
    tgfancy: {
      feature: false,
    },
  });

  let txt = ``
  txt += `Способ оплаты: ${cartInfo.paymentMethod} \n`
  txt += `Имя: ${cartInfo.name} \n`
  txt += `Фамилия: ${cartInfo.secondName} \n`
  txt += `Email: ${cartInfo.mail} \n`
  txt += `Телефон: ${cartInfo.phone} \n`
  txt += `Город: ${cartInfo.city} \n`
  txt += `Номер отеделния: ${cartInfo.numberOfPost} \n`
  txt += `Комментарий: ${cartInfo.comment} \n`

  for (let i = 0; i < cartInfo.cart.length; i++) {
    txt += `\n`
    txt += `Продукт: ${cartInfo.cart[i].title} \n`
    txt += `Кол-во: ${cartInfo.cart[i].count} \n`
    txt += `Цвет: ${cartInfo.cart[i].color} \n`
    txt += `Размер: ${cartInfo.cart[i].size} \n`
    txt += `Цена: ${cartInfo.cart[i].price} грн \n`
  }

  txt += `\n`
  txt += `Всего к оплате: ${cartInfo.price} грн `

  bot.sendMessage(chat_id, txt);
}