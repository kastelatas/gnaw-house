import products from "../../src/defines/products";
import fs from "fs";

export default function handler(req, res) {
  let productsFile;
  let {method} = req;
  if (method === "GET") {
    fs.readFileSync('products.json', (err, data) => {
      if (err) throw err;
      productsFile = JSON.parse(data);
    });
    res.status(200).json(productsFile)
  }
}