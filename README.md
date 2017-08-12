## Node Emaily

## Create dev.js in config
```javascript
module.exports = {
  googleClientID: 'YOUR GOOGLE CLIENT ID',
  googleClientSecret: 'YOUR GOOGLE CLIENT SECRET',
  mongoURL: 'mongodb://YOUR_HOST:YOUR_MONGO_PORT/YOUR_MONGO_DB',
  cookieKey: 'YOUR COOKIE KEY'
}
```

## Heroku config:set
> heroku config:set NPM_CONFIG_PRODUCTION=false