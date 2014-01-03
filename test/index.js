/**
 * Created by fritz on 1/2/14.
 */
var assert = require('assert')
	, fs = require('fs')
	, localface = require('..');

describe('localface', function(){
	var womenCount;

	it('counts', function(){
		womenCount = localface.count['f'];
		assert.equal(typeof womenCount, 'number');
	});

	it('returns file path for valid index', function(){
		var file = localface.get('f', womenCount - 1);
		assert.ok(fs.existsSync(file));
	});

	it('returns file path with index unset', function(){
		var file = localface.get('m');
		assert.ok(fs.existsSync(file));
	});

	it('returns null for invalid index', function(){
		var file = localface.get('f', womenCount);
		assert.strictEqual(file, null);
	});
});
