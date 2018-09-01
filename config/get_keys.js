let keys; 

if (process.env.IS_PRODUCTION) {
  module.exports = keys = process.env.SECRET_OR_KEY;
} else {
  module.exports = keys = require('./keys').secretOrKey;
}