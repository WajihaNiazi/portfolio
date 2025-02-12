const express = require ('express');
const router = express.Router ();
const Contact = require ('../models/Contact');
const nodemailer = require ('nodemailer');

const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL

// Configure Nodemailer
const transporter = nodemailer.createTransport ({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// POST /api/contact
router.post ('/', async (req, res) => {
  try {
    const {name, email, message} = req.body;

    if (!name || !email || !message) {
      return res.status (400).json ({error: 'All fields are required'});
    }

    // Save the message to the database
    const newContact = new Contact ({name, email, message});
    await newContact.save ();

    // Send the message to Slack
    const slackMessage = {
      text: `*New Portfolio Message*\n\n*Name*: ${name}\n*Email*: ${email}\n*Message*: ${message}`,
    };

    const slackResponse = await fetch (SLACK_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify (slackMessage),
    });

    if (!slackResponse.ok) {
      console.error (`Slack API error: ${slackResponse.statusText}`);
    }

    // Send the message via email using Nodemailer
    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: `Portfolio Contact Form: ${name}`,
        text: `You have a new contact form submission:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
      replyTo: email,
    };

    await transporter.sendMail (mailOptions);
    res
      .status (201)
      .json ({message: 'Message sent successfully!'});
  } catch (error) {
    console.error ('Error handling contact submission:', error);
    res.status (500).json ({error: 'Server error'});
  }
});

module.exports = router;
