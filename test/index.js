/**
 * Created by fritz on 1/2/14.
 */
var assert = require('assert')
	, fs = require('fs')
	, localface = require('..');

describe('localface', function(){
	var womenCount;

	it('counts', function(){
		womenCount = localface.womenCount;
		assert.equal(typeof womenCount, 'number');
	});

	it('returns file path for valid index', function(){
		var file = localface.getWoman(womenCount - 1);
		assert.equal(typeof file, 'string');
		assert.ok(fs.existsSync(file));
	});

	it('returns null for invalid index', function(){
		var file = localface.getWoman(womenCount);
		assert.strictEqual(file, null);
	});
});
