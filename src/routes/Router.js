const staffRouter = require('./Staff')
const adminRouter = require('./Admin')
const blogRouter = require('./Blog')

const Router = (app) => {
  // Staff Router
  app.use('/staff', staffRouter)

  // Admin Router
  app.use('/admin', adminRouter)

  // Blog Router
  app.use('/blog', blogRouter)
  app.use('/', (req, res) => res.redirect('/blog'))

  // Any Router
  app.use('*', (req, res) => {
    res.status(404).send('Page Not Found')
  })
}

module.exports = Router