
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const stockRoutes = require("./routes/stockRoutes");
const { errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Connect to MongoDB
connectDB();

// ✅ Middleware
app.use(express.json());
app.use(cors());

// ✅ Routes
app.use("/api/stocks", stockRoutes);
app.get("/", (req, res) => res.send("🚀 Stock Management API is running..."));

// ✅ Error Handling Middleware
app.use(errorHandler);

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
