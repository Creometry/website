const { Router } = require('express')
const router = Router()
const axios = require('axios')

router.post( '/paymee', function( req, res ){
    axios.post(process.env.PAYMEE_URL+'/api/v1/payments/create', {
        vendor: process.env.VENDOR,
        amount: req.body.amount,
        note: "",
    }, {
        headers: {
            Authorization: 'Token '+process.env.PAYMEE_API_KEY,
        },
    }).then(response => {
        res.json(response.data)
    }).catch(error => {
        console.log(error);
    });
  });
module.exports = router