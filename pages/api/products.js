import products from "../../src/defines/products";

export default function handler(req, res) {
  setTimeout(() => {
    console.log('111')
    res.status(200).json(products)
  }, 2000)
}