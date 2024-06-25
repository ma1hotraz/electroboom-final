const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");

const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const emailRoutes = require("./routes/emailRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Use Routes
app.use("/api", userRoutes);
app.use("/api", productRoutes);
app.use("/api", emailRoutes);

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
