var mongoose = require('mongoose');
var express = require('express');
var path = require('path');
var app = express();
var webtoon = require('./_router/webtoon');
var MTitle = require('./_model/webtoon');
var PythonShell = require('python-shell');

app.use('/_view/app' ,express.static(__dirname+"/_view/app"));
app.use('/', express.static(__dirname));
app.use('/_view', express.static(__dirname + '/_view'));
app.use('/vitality', express.static(__dirname + '/_view/vitality'));
// app.use(express.static('client'));
// app.use(express.static('client/src/js'));
// app.use(express.static('client/templates/'))


mongoose.connect('localhost/webtoon');
var db = mongoose.connection;
var testSchema, test;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
    console.log("mongo db connection OK.");
    testSchema = mongoose.Schema({ day: String, imgsrc: String, name: String, titleid: String });
    test = mongoose.model('test', testSchema);
});
app.get('/', function (req, res) {
    // res.send("오여사!");
    res.sendFile(__dirname+"/_view/index.html");
});
app.listen(3000, function () {
    console.log("오여사");
});
app.get('/update', function (req, res) {
    var options = {
        mode: 'text',
        pythonOptions: ['-u']
    };
    PythonShell.run('./pymodule/titlecrawl.py', options, function (err, results) {
        if (err)
            throw err;
        res.send(results);
        console.log(results);
    });
});
//# sourceMappingURL=server.js.map