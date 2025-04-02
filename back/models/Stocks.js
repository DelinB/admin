const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema(
  {
    productCode: { type: String, required: true, unique: true, trim: true },
    batchNo: { type: String, required: true, trim: true },
    brandName: { type: String, required: true, trim: true },
    genericName: { type: String, required: true, trim: true },
    hsnCode: { type: String, required: true, trim: true },
    stockedDate: { type: Date, required: true },
    salePrice: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Stock", stockSchema);
