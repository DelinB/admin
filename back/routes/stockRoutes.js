const express = require("express");
const router = express.Router();
const {
  getStocks,
  getStockById,
  addStock,
  updateStock,
  deleteStock,
} = require("../controllers/stockController");

// ✅ CRUD Routes
router.get("/", getStocks);
router.get("/:id", getStockById);
router.post("/", addStock);
router.put("/:id", updateStock);
router.delete("/:id", deleteStock);

module.exports = router;
