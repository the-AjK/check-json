check-json - JSON fields checking
-------------
Copyright (c) 2014, Alberto Garbui (aka JK) www.ajk.altervista.org

All rights reserved.

Usage
-------------
check-json(object-literal)
Returns an chainable object whereon the following functions can be used.

.hasString(key)
-------------
.hasString(key)
-------------
.hasStringNotEmpty(key)
-------------
.optionalString(key)
-------------
.optionalStringNotEmpty(key)
-------------


Example:

```  javascript

var checkJson = require('check-json');

var user = {
	username: 'alberto',
	password: 'MDAxMTIyMzM0NDU1NjY3Nw==',
	gender: 'male'
	activities: {
		sports: 'crossfit',
		hobby: 'electronics stuff'	
	}
}

checkJson(user)
	.hasStringNotEmpty('username')
	.hasStringNotEmpty('password')
	.optionalString('gender')
	.optionalStringNotEmpty('activities.sports')
	.optionalString('activities.hobby')
	.check(function(err){
		if(err){
			console.log('error: ' + JSON.stringify(err)); 
		}else{
			//no errors found
		}
	};
```
