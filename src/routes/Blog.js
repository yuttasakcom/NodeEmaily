const router = require('express').Router()

router.get('/', (req, res) => {
  res.send('Blog')
})

module.exports = router