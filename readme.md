# Sequence With Priority
To create sequence of value with your chosen priority.


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

```js
const  createSequence = require('sequence-with-priority');
const  result =
	createSequence({
		startValue:  'c', //Optional, default value is a
		lastValue:  'x',
		step:  2, // Optional, default value is 1
		highestPriorities: ['d','e','j']
	});

// result => [ 'd', 'e', 'j', 'c', 'g', 'i', 'k', 'm', 'o', 'q', 's', 'u', 'w', 'x' ]
```

## Parameter
|Key|Data type|Default Value|Description|
|--|--|--|--|
|order|string|ASC|Order of sequence, have 2 options **ASC** and **DESC**|
|startValue|string,integer|0 or a (based on lastValue you inputed)|start value of sequence
|lastValue|string, integer|-|last value of sequence|
|step|integer|1|Step of sequence|
|highestPriorities|array|-|The priority values that will place on the top of sequence|
