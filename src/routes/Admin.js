const router = require('express').Router()

router.get('/post', (req, res) => {
  res.send('Admin Post GET')
})

module.exports = router