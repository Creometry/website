const { Router } = require('express')
const router = Router()
const axios = require('axios')

router.post('/newsletter', function(req, res){
  axios.post(`${process.env.SUBSCRIPTION_URL}/newsletter`, req.body).then(response => {
      res.json(response.data)
  }).catch(err=> res.status(500).json(err))
})
router.get('/newsletter', function(req, res){
  axios.get(`${process.env.SUBSCRIPTION_URL}/newsletter`).then(response => {
      res.send(response.data)
  }).catch(err=> res.status(500).json(err))
})

module.exports = router