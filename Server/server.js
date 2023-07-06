// SSL https
const https = require('node:https');
const fs = require('node:fs');

const options = {
    key: fs.readFileSync('C:/sites/ssl/effyaws3.effyjewelry.com-key.pem'),
    cert: fs.readFileSync('C:/sites/ssl/effyaws3.effyjewelry.com-crt.pem'),
};

https.createServer(options, (req, res) => {
   
}).listen(8000);