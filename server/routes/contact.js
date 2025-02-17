const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
const nodemailer = require("nodemailer");


// Configure Nodemailer
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

// POST /api/contact
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    const mailOptions = {
      from: email,
      to: process.env.EMAIL,
      subject: `Portfolio Contact Form: ${name}`,
      text: `You have a new contact form submission:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
      replyTo: email,
    };

    await transporter
      .sendMail(mailOptions)
      .catch((err) => console.error("Nodemailer error:", err));

    res.status(201).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error:", error.message || error);
    res.status(500).json({ error: "Server error. Check logs for details." });
  }
});

module.exports = router;
