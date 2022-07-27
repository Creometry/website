const { Router } = require('express')
const router = Router()
const axios = require('axios')

router.post('/provisionProject', function(req, res) {
  axios
    .post(process.env.INGRESS_URL + '/api/v1/provisionProject', {
      projectName: req.body.projectName,
      email: req.body.email,
      phone: req.body.phone,
      billingAccountId: req.body.billingAccountId,
      plan: req.body.plan,
      gitRepoName: req.body.gitRepoName,
      gitRepoUrl: req.body.gitRepoUrl,
      gitRepoBranch: req.body.gitRepoBranch,
      paymentToken: req.body.paymentToken,
      userId: req.body.userId,
      uuid: req.body.uuid,
      companyName: req.body.companyName,
      taxId: req.body.taxId,
      isCompany: req.body.isCompany
    })
    .then(response => {
      res.json(response.data)
    })
    .catch(error => {
      res.status(500).json(error)
    })
})

router.get('/getBillingAccountsByAdminUUID/:uuid', function(req, res) {
  axios
    .get(
      process.env.BILLING_API_URL +
        '/v1/GetBillingAccountsByAdminUUID/' +
        req.params.uuid
    )
    .then(response => {
      res.json(response.data)
    })
    .catch(error => {
      res.status(500).json(error)
    })
})

module.exports = router
