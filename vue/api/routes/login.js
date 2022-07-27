const { Router } = require('express')
const router = Router()
const axios = require('axios')

router.post('/login', function(req, res) {
  axios
    .post(process.env.INGRESS_URL + '/api/v1/login', {
      username: req.body.username,
      password: req.body.password
    })
    .then(response => {
      res.json(response.data)
    })
    .catch(error => {
      res.status(500).json(error)
    })
})

module.exports = router
