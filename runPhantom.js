var path = require('path')
var childProcess = require('child_process')
var phantomjs = require('phantomjs')
var binPath = phantomjs.path
var phan = require('./runPhantom');
module.exports = function(func,cb){
	var childArgs = [
  	'--ssl-protocol=any',
  	path.join(__dirname, func)
	]
	childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
    var a = stdout.split('\n');
    cb(a[a.length-2])
  }); 
}
