import nodemailer from "nodemailer";

const email = process.env.MAILADRESS;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.MAILADRESS,
    pass: process.env.MAILPASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export default async (req, res) => {
  try {
    const { senderMail, userName, content } = req.body;

    const message = {
      from: email,
      to: email,
      subject: `Contato via site de ${userName}`,
      html: `<p><b>Email:</b> ${senderMail}<br/><b>Mensagem:</b> ${content}</p>`,
      replyTo: senderMail,
    };

    transporter.sendMail(message, (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Message sent", info);
      }
    });
    return res.status(200);
  } catch (err) {
    return res.json({
      error: true,
      message: err.message,
    });
  }
};
