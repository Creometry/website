const { Router } = require('express')
const router = Router()
const axios = require('axios')

router.post('/mail', function(req, res){
  axios.post(`${process.env.SUBSCRIPTION_URL}/mail`, req.body).then(response => {
      res.json(response.data)
  }).catch(err=> res.status(500).json(err))
})

module.exports = router