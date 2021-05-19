const express = require("express");
const {
  products,
  getIndex,
  getCart,
  getCheckout,
  getOrders,
  getProduct,
  postCart,
} = require("../controllers/shop");
const { getProducts } = require("../controllers/shop");
const router = express.Router();

const adminData = require("./admin");

router.get("/", getIndex);

router.get("/products", getProducts);

router.get("/products/:productId", getProduct);

router.get("/cart", getCart);

router.post("/cart", postCart);

router.get("/orders", getOrders);

router.get("/checkout", getCheckout);

module.exports = router;
