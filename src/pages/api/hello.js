const nodemailer = require("nodemailer");

export default function sendMail(req, res) {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL,
    replyTo: email,
    subject: `Message from ${name}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      res.json({
        status: "success",
        data: data,
      });
    }
  });
}
