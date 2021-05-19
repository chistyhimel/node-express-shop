const path = require("path");
const fs = require("fs");
const rootDir = require("../utils/path");

const p = path.join(rootDir, "data", "cart.json");

module.exports = class Cart {
  static addProduct() {
    fs.readFile(p, (err, fileContent) => {
      let cart = { products: [], totalPrice: 0 };
      if (err) {
        cart = JSON.parse(fileContent);
      }
      const existingProduct = cart.products.find((pd) => pd.id === id);
    });
  }
};
