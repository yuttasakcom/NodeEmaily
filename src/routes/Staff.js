const router = require('express').Router()

router.get('/post', (req, res) => {
  res.send('Staff Post GET')
})
module.exports = router