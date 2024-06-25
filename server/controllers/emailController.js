const emailService = require("../utils/emailService");

exports.sendEmail = async (req, res) => {
  try {
    const { email, cartItems } = req.body;
    await emailService.sendOrderConfirmation(email, cartItems);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
};
