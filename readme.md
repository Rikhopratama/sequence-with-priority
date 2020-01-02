# Sequence With Priority
To create sequence of values (*current version is only support number, alphabet is under development*) with your chosen priority.


## Example
```js
const createSequence = require('sequence-with-priority');
const result = 
	createSequence({
		startValue: 3, //Optional, default value is 0
		lastValue: 10,
		highestPriorities: [5,7,4]
	});

// result => [ 5, 7, 4, 3, 6, 8, 9, 10 ]
```