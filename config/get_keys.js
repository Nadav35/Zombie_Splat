let keys; 

if (process.env.IS_PRODUCTION) {
  module.exports = keys = process.env.SECRET_OR_KEY;
  module.exports = db = process.env.MONGO_DB_URI;
} else {
  module.exports = keys = require('./keys').secretOrKey;
  module.exports = db = require('./keys').mongoURI;
}