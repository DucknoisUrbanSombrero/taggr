var path = require('path')
var childProcess = require('child_process')
var phantomjs = require('phantomjs')
var binPath = phantomjs.path
var phan = require('./runPhantom');

var childArgs = [
  path.join(__dirname, 'getTag.js'),
  '--ssl-protocol=any index.js'
]

var getTag = function(cb){
  childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
    var a = stdout.split('\n');
    cb(a[a.length-2])
  }); 
}

module.exports = getTag;

