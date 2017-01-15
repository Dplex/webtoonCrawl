var mongoose = require('mongoose');
var express = require('express');
var app = express();
var webtoon = require('./_router/webtoon');
var MTitle = require('./_model/webtoon');
var PythonShell = require('python-shell');
mongoose.connect('localhost/webtoon');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
    console.log("mongo db connection OK.");
});
app.get('/', function (req, res) {
    res.send("오여사!");
});
app.listen(3000, function () {
    console.log("오여사");
});
app.get('/update', function (req, res) {
    //var pyshell = new PythonShell('./pymodule/titlecrawl.py', { mode: 'text' });
    //var output = '';
    //pyshell.stdout.on('data', function (data) {
    //    output += '' + data;
    //});
    //pyshell.end(function (err) {
    //    if (err) throw err;
    //    console.log(output);
    //});
    PythonShell.run('./pymodule/titlecrawl.py', function (err, results) {
        if (err)
            throw err;
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