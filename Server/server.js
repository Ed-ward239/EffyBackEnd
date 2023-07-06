// SSL https
var express = require('express');
var https = require('https');
var fs = require('fs');

const app = express(); 

var options = {
    key: fs.readFileSync('C:/sites/ssl/effyaws3.effyjewelry.com-key.pem'),
    cert: fs.readFileSync('C:/sites/ssl/effyaws3.effyjewelry.com-crt.pem')
};

const httpsServer = https.createServer(options, app);

httpsServer.listen(443, () => {
  console.log('Server running on port 443 with SSL');
});

app.use((req, res, next) => {
    if (req.url === 'effyaws3.effyjewelry.com' && !req.secure){
        return res.redirect('https://${req.headers.host}${req.url}');
    }
    return next();
});


/*
    var express = require('express');
    var https = require('https');
    var http = require('http');
    var fs = require('fs');

// This line is from the Node.js HTTPS documentation.
    var options = {
        key: fs.readFileSync('test/fixtures/keys/agent2-key.pem'),
        cert: fs.readFileSync('test/fixtures/keys/agent2-cert.cert')
    };

// Create a service (the app object is just a callback).
    var app = express();

// Create an HTTP service.
    http.createServer(app).listen(80);
// Create an HTTPS service identical to the HTTP service.
    https.createServer(options, app).listen(443);
*/