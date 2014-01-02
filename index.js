/**
 * Created by fritz on 1/2/14.
 */
var path = require('path')
	, fs = require('fs');

var dir = path.resolve(__dirname, 'portraits')
	, womenDir = path.join(dir, 'women')
	, menDir = path.join(dir, 'men');

var womenList = fs.readdirSync(womenDir)
		.sort(function (a, b) {
			return parseInt(a) - parseInt(b)
		})
	, menList = fs.readdirSync(menDir)
		.sort(function (a, b) {
			return parseInt(a) - parseInt(b)
		})
	, womenCount = womenList.length
	, menCount = menList.length;

// export counts
exports.womenCount = womenCount;
exports.menCount = menCount;

// export gets
exports.getWoman = function (index) {
	if (!womenList[index]) return null;
	return path.join(womenDir, womenList[index]);
}
exports.getMan = function (index) {
	if (!menList[index]) return null;
	return path.join(menDir, menList[index]);
}

