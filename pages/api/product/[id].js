const fs = require('fs');
import products from "../../../src/defines/products";

export default function handler(req, res) {
  let data = JSON.stringify(products);
  fs.writeFile('products.json', data, (err) => {
    if (err) throw err;
    console.log('Data written to file');
  });

  let productById = products.find(product => {
    return product.id === Number(req.query.id)
  })

  res.status(200).json(productById);
}