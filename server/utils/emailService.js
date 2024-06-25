const nodemailer = require("nodemailer");
require("dotenv").config();

exports.sendOrderConfirmation = async (email, cartItems) => {
  let total = 0;
  let quantity = 0;

  const itemsList = cartItems
    .map((item) => {
      total += item.price * item.quantity;
      quantity += item.quantity;
      return `<li>${item.title} - Quantity: ${item.quantity}</li>`;
    })
    .join("");

  const totalPrice = total + 60;

  const orderSummary = `
    <h2 style="color: #333;">Order Details:</h2>
    <p style="color: #333;">Items:</p>
    <ul>
      ${itemsList}
    </ul>
    <p style="color: #333;">Total Price: ₹ ${totalPrice} (Shipping included)</p>
  `;

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
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
};
