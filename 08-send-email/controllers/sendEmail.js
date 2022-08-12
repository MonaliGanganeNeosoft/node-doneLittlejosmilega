const nodemailer = require("nodemailer");
const sgMail = require("@sendgrid/mail");

const sendEmailEthereal = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "garfield.gorczany3@ethereal.email",
      pass: "XgRJKz9XCKXuhVyDST",
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Coding Addict👻" <moni@gmail.com>', // sender address
    to: "bar@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>sending emails with nodejs</b>", // html body
  });

  res.json(info);
};
const sendEmail = async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: "monali.gangane1999@gmail.com", // Change to your recipient
    from: "monali.gangane@gmail.com", // Change to your verified sender
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };
  const info = await sgMail.send(msg);
  res.json(info);
};
module.exports = sendEmail;
