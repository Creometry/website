const { Router } = require('express')
const router = Router()
var nodemailer = require('nodemailer');

router.post('/mail', function(req, res){

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SENDER_ADRESS,
      pass: process.env.SENDER_PWD
    }
  });
  
  var mailOptions = {
    from: process.env.SENDER_ADRESS,
    to: process.env.SENDER_ADRESS,
    subject: req.body.title,
    text: `From: ${req.body.name} \nEmail Adress: ${req.body.adress} \nPhone Number: ${req.body.number} \nBody: ${req.body.body}`
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      res.status(500).send(error)
    } else {
      res.send("sent")
    }
  });
})

module.exports = router