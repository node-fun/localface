localface
=========

100+ human faces to provide, especially for test

## Usage

1. Install with Node
	```shell
	npm install localface
	```

2. Get a count
	```js
	var localface = require('localface');
	var womenCount = localface.womenCount;
	```

3. Get a file path
	```js
	var file = localface.getWoman(_.random(0, womenCount - 1));
	file;	// "/home/fritz/Dev/npm/localface/portraits/women/59.jpg"
	fs.existsSync(file);	// true
	```
