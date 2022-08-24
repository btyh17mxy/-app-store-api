'use strict';

const Express = require('express');
const router = require('./lib');

const app = Express();
const port = process.env.PORT || 3000;

app.use('/apple-store-api/api/', router);

app.get('/', function(req, res){
  res.redirect('/apple-store-api/api');
});

app.listen(port, function () {
  console.log('Server started on port', port);
});
