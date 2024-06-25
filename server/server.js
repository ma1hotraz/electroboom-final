const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/electroboom");
  console.log("MongoDB connected");
}

//schema for contact page form
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

//Model for contact page form
const User = mongoose.model("Contact", userSchema); //User is like a class

const productSchema = new mongoose.Schema({
  id: String,
  category: String,
  title: String,
  image: String,
  description: String,
  price: Number,
});

const Item = mongoose.model("Item", productSchema, "products");

const app = express();
app.use(cors()); //middleware
app.use(bodyParser.json());
app.use(express.json());

//CRUD - Create
app.post("/electroboom", async (req, res) => {
  let user = new User(); //new object called user, this user object will be manipulated or all changes will be done on it
  user.name = req.body.name;
  user.email = req.body.email;
  user.message = req.body.message;
  const doc = await user.save();
  console.log(doc);
  res.json(doc);
});

// app.put ->update ( /update/:id)  -- app.delete(delete/:id)

//CRUD - Fetching Data
app.get("/productsdata", async (req, res) => {
  try {
    // Fetch data from the "all" collection
    const items = await Item.find();

    res.json(items);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
});

app.post("/send-email", async (req, res) => {
  try {
    const { email, cartItems } = req.body;

    // Calculate order summary
    let total = 0;
    let quantity = 0;

    // Create a list of items and calculate total price and quantity
    const itemsList = cartItems
      .map((item) => {
        total += item.price * item.quantity;
        quantity += item.quantity;

        return `<li>${item.title} - Quantity: ${item.quantity}</li>`;
      })
      .join("");

    // Calculate total price including shipping
    const totalPrice = total + 60;

    // Generate the HTML order summary
    const orderSummary = `
    <h2 style="color: #333;">Order Details:</h2>
    <p style="color: #333;">Items:</p>
    <ul>
      ${itemsList}
    </ul>
    <p style="color: #333;">Total Price: ₹ ${totalPrice} (Shipping included)</p>
    `;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      // Provide your email service credentials or use a third-party SMTP service
      service: "Gmail",
      auth: {
        user: "malhotrazmr@gmail.com",
        pass: "mcahzenfhizfgjmv",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Send the email
    await transporter.sendMail({
      from: "malhotrazmr@gmail.com", // Replace with your email address
      to: email,
      subject: "Order Confirmation",
      html: `
      <div style="background-color: #f2f2f2; padding: 20px;">
        <h1 style="color: #333; text-align: center;">Thank you for your order!</h1>
        <div style="background-color: #fff; padding: 20px; border-radius: 5px;">
          ${orderSummary} 
        </div>
  
        <div style="display:flex; justify-content:center; align-items:center">
          <div>
            <img src="https://styles.redditmedia.com/t5_3a9zj/styles/communityIcon_am83r8jmc5151.png" alt="Logo" style="padding: 20px; height:40px; width:40px">
          </div>
          <div>
            ElectroBoom LLC. © 2023<br>
            <i> An E-commerce Project By- </i> <a href="#"> <br> Shashank Malhotra </a>
          </div>
        </div>
      </div>
      `,
    });

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

// Start the server
app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
