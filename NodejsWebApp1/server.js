var mongoose = require('mongoose');
var express = require('express');
var path = require('path');
var app = express();
var webtoon = require('./_router/webtoon');
var MTitle = require('./_model/webtoon');
var PythonShell = require('python-shell');

app.use('/', express.static(__dirname + '/vitality'));
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
    res.sendFile(__dirname+"/index.html");
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
app.get('/:id', function (req, res) {
    var id = req.params.id;
    if (id == '왜')
        res.send("사랑해");
    else if (id == '응')
        res.send("그냥");
    else if (id == '네')
        res.send("사랑해오여사");
});
//# sourceMappingURL=server.js.map