const Stock = require("../models/Stocks");

// ✅ Get All Stocks
const getStocks = async (req, res) => {
  try {
    const stocks = await Stock.find();
    res.json(stocks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get Stock by ID
const getStockById = async (req, res) => {
  try {
    const stock = await Stock.findById(req.params.id);
    if (!stock) return res.status(404).json({ message: "Stock not found" });
    res.json(stock);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Add New Stock
const addStock = async (req, res) => {
  try {
    const stock = new Stock(req.body);
    await stock.save();
    res.status(201).json(stock);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ error: "Product code must be unique." });
    }
    res.status(400).json({ error: error.message });
  }
};

// ✅ Update Stock
const updateStock = async (req, res) => {
  try {
    const stock = await Stock.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!stock) return res.status(404).json({ message: "Stock not found" });
    res.json(stock);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ✅ Delete Stock
const deleteStock = async (req, res) => {
  try {
    const stock = await Stock.findByIdAndDelete(req.params.id);
    if (!stock) return res.status(404).json({ message: "Stock not found" });
    res.json({ message: "Stock deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getStocks,
  getStockById,
  addStock,
  updateStock,
  deleteStock,
};
