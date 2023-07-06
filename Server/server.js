// SSL https
var express = require('express');
var https = require('https');
var fs = require('fs');

const app = express(); 

var options = {
    key: fs.readFileSync('C:/sites/ssl/effyaws3.effyjewelry.com-key.pem'),
    cert: fs.readFileSync('C:/sites/ssl/effyaws3.effyjewelry.com-crt.pem')
};

app.enable('trust proxy');

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