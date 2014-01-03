/**
 * Created by fritz on 1/2/14.
 */
var path = require('path'),
	fs = require('fs');

var home = path.join(__dirname, 'portraits'),
	dir = {
		'f': path.join(home, 'women'),
		'm': path.join(home, 'men')
	};

var s = function (a, b) {
		return parseInt(a) - parseInt(b);
	},
	files = {
		'f': fs.readdirSync(dir['f']).sort(s),
		'm': fs.readdirSync(dir['m']).sort(s)
	},
	count = {
		'f': files['f'].length,
		'm': files['m'].length
	};

// export count
exports.count = count;

// export get
exports.get = function (gender, index) {
	if (index == null) {
		index = ~~(Math.random() * count[gender]);
	}
	if (!files[gender][index]) return null;
	return path.join(dir[gender], files[gender][index]);
};
