import fs from "fs";

export default function handler(req, res) {
  let productsFile;
  let {method} = req;
  if (method === "GET") {
    productsFile = fs.readFileSync('products.json', (err, data) => {
      if (err) throw err;
      return JSON.parse(data);
    });
    res.status(200).json(productsFile)
  }
}