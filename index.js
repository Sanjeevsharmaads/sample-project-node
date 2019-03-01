const express = require('express')
const config = require('./data.json')
var bodyParser = require('body-parser')
const app = express()
const port = 9000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
  	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  	res.header('Access-Control-Allow-Headers', 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range');
    res.header('Access-Control-Max-Age', 1728000);
   	res.header('Content-Type', 'text/plain; charset=utf-8');
    res.header('Content-Length', 0);
      
    if ('OPTIONS' == req.method) {
     	res.send(200);
    }
    else {
    	next();
  	}
};

app.use(allowCrossDomain); 

app.get('/', (req, res) => {
	console.log('data is '+config[0]["id"]);
})

app.get('/getData',(req,res) =>{
	console.log('hello i am in getData');
	res.json(config);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))