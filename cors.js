var WHITE_LIST = ["http://localhost:8080", "http://localhost:8081"];

var corsOptionsDelegate = function (req, callback) {
  var corsOptions = { origin: true, credentials: true };
  if (WHITE_LIST.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true, credentials: true };
  } else {
    corsOptions = { origin: false };
  }
  corsOptions = { origin: true, credentials: true };
  callback(null, corsOptions); // callback expects two parameters: error and options
};

module.exports = corsOptionsDelegate;
