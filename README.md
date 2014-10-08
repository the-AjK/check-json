check-json - JSON fields checking
-------------
Copyright (c) 2014, Alberto Garbui (aka JK) www.ajk.altervista.org

All rights reserved.

Usage
-------------

check-json(object-literal)
-----------
Returns an chainable object whereon the following functions can be used.

.hasString(key)
-----------
.hasString(key)
-----------
.hasStringNotEmpty(key)
-----------
.hasOptionalString(key)
-----------
.hasOptionalStringNotEmpty(key)
-----------
.hasObject(key)
-----------
.hasNumber(key)
-----------


Example:

```  javascript

var checkJson = require('check-json');

var user = {
	ID: new Object("wcded33iwhdee3xwuhue3"),
	username: 'alberto',
	password: 'MDAxMTIyMzM0NDU1NjY3Nw==',
	gender: 'male',
	age: 27,
	activities: {
		sports: 'crossfit',
		hobby: 'electronics stuff'	
	}
}

checkJson(user)
	.hasObject('ID')
	.hasStringNotEmpty('username')
	.hasStringNotEmpty('password')
	.hasOptionalString('gender')
	.hasNumber('age')
	.hasOptionalStringNotEmpty('activities.sports')
	.hasOptionalString('activities.hobby')
	.check(function(err){
		if(err){
			console.log('error: ' + JSON.stringify(err)); 
		}else{
			//no errors found
		}
	};
```
