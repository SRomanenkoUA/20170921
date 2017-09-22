const express = require('express');
const bodyParser = require('body=parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.post('/test', function (req, res) {
    console.log(req.body);
    res.send('post data');
});

app.listen(3012, function () {
    console.log('API started');

})