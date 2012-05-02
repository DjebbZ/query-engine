# Query-Engine

Query-Engine provides extensive Querying, Filtering, and Searching abilities for [Backbone.js Collections](http://documentcloud.github.com/backbone/#Collection) as well as JavaScript arrays and objects.


## Features

* includes a [live interactive demo](http://bevry.github.com/query-engine/demo/)
* currently [source-code documentation](https://github.com/bevry/query-engine/blob/master/lib/query-engine.coffee#files) only
* runs on node.js and in the browser
* supports [NoSQL](http://www.mongodb.org/display/DOCS/Advanced+Queries) queries (like [MongoDB](http://www.mongodb.org/))
* supports filters (applying a filter function to a collection)
* supports search strings (useful for turning search input fields into useful queries)
* supports pills for search strings (e.g. `author:ben priority:important`)
* supports optional live collections (when a model is changed, added or removed, it can automatically be tested against the collections queries, filters, and search string, if it fails, remove it from the collection)
* supports parent and child collections (when a parent collection has a model removed, it is removed from the child collection too, when a parent collection has a model added or changed, it is retested against the child collection)
* actively maintained, supported, and implemented by several companies


## Installation

### Server-Side with Node.js

	1. [Install Node.js](https://github.com/balupton/node/wiki/Installing-Node.js)

	2. Install
		
		``` bash
		npm install query-engine
		```
	
	3. Require

		``` javascript
		var queryEngine = require('query-engine');
		```


### Client-Side with Web Browsers

	1. Include the necessary scripts
		
		``` html
		<script src="http://documentcloud.github.com/underscore/underscore-min.js"></script>
		<script src="http://documentcloud.github.com/backbone/backbone-min.js"></script>
		<script src="http://raw.github.com/bevry/query-engine/master/lib/query-engine.js"></script>
		```
	
	2. Access Query-Engine via the `window.queryEngine` variable



## History

You can discover the history inside the [History.md](https://github.com/bevry/query-engine/blob/master/History.md#files) file



## License

Licensed under the [MIT License](http://creativecommons.org/licenses/MIT/)
<br/>Copyright &copy; 2012 [Bevry Pty Ltd](http://bevry.me)
<br/>Copyright &copy; 2011 [Benjamin Lupton](http://balupton.com)
