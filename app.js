var express = require('express');
var app = express();

function parseSoftware(str) {
  var start = str.indexOf('(');
  var end = str.indexOf(')');

  return str.slice(start+1, end)
}

app.get('/', function(req, res){
  console.dir(req.headers);
  var ip = req.ip;
  var lang = req.get('accept-language').split(',')[0];
  var software = parseSoftware(req.get('user-agent'));
  res.json({ipaddress: ip, language: lang, software: software});
});

app.listen(5000);
