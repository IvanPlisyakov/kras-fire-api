const NotFoundError = require('../errors/not-found-err');
const CommonError = require('../errors/common-err');
const nodemailer = require("nodemailer");

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.mail.ru",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "plisyakov.ivan@mail.ru", // generated ethereal user
      pass: "mxtb9AbwbGaSJj3ct4NT", // generated ethereal password
    },
  });


const sendOrder = async (req, res, next) => {
  //let testAccount = await nodemailer.createTestAccount();
  const { text } = req.body;

  // send mail with defined transport object
  return transporter.sendMail({
    from: '"Kras Fire 👻" <plisyakov.ivan@mail.ru>', // sender address
    to: "favorit_relax_tourism@mail.ru", // list of receivers
    subject: "Заказ", // Subject line
    text: text, // plain text body
  })
    .then(() => {
      res.send({ message: "OK"});
    })
    .catch(next);

  //console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal accountconsole.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
};

module.exports = {
  sendOrder
};