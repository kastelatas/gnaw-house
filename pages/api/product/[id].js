import products from "../../../src/defines/products";

export default function handler(req, res) {
  let productById = products.find(product => {
    return product.id === Number(req.query.id)
  })
  res.status(200).json(productById)
}