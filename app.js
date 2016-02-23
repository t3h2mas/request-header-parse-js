var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

function parseSoftware(str) {
  var start = str.indexOf('(');
  var end = str.indexOf(')');

  return str.slice(start+1, end)
}

function parseIp(str) {
  // return ipv4 IP instead of ipv6 && ipv4
  var arr = str.split(':');
  return arr[ arr.length - 1]; // same as python's -1 index
}

app.get('/', function(req, res){
  console.dir(req.headers);
  var ip = parseIp(req.ip);
  var lang = req.get('accept-language').split(',')[0];
  var software = parseSoftware(req.get('user-agent'));
  res.json({ipaddress: ip, language: lang, software: software});
});

app.listen(app.get('port'));
