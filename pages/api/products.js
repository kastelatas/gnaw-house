import products from "../../src/defines/products";

export default function handler(req, res) {
  res.status(200).json(products)
}