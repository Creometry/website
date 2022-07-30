const { Router } = require('express')
const router = Router()
const axios = require('axios')

router.post('/register', function(req, res) {
  axios
    .post(process.env.INGRESS_URL + '/api/v1/register', {
      username: req.body.username,
      email: req.body.email
    })
    .then(response => {
      res.json(response.data)
    })
    .catch(error => {
      res.status(500).json(error)
    })
})

module.exports = router
