if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  module.exports = require('./configureStore.development');
} else {
  // eslint-disable-next-line global-require
  module.exports = require('./configureStore.production');
}
