const express = require("express");
const {
  products,
  getIndex,
  getCart,
  getCheckout,
} = require("../controllers/shop");
const { getProducts } = require("../controllers/shop");
const router = express.Router();

const adminData = require("./admin");

router.get("/", getIndex);
router.get("/products", getProducts);
router.get("/cart", getCart);
router.get("/checkout", getCheckout);

module.exports = router;
