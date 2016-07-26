var http = require('http');
var url  = require('url');
var fs = require('fs');

var args = process.argv;
var type = args[2] || 'text';
var arr = [];
var bufferString;

function csvHandler(req, res){
  fs.readFile('people.csv',function (err,data) {

  if (err) {
    return console.log(err);
  }

  //Convert and store csv information into a buffer.
  bufferString = data.toString();

  //Store information for each individual person in an array index. Split it by every newline in the csv file.
  arr = bufferString.split('\n');
  console.log(arr);

  for (i = 0; i < arr.length; i++) {
    JSON.stringify(arr[i]);
  }

  JSON.parse(arr);
  res.send(arr);
});
}
