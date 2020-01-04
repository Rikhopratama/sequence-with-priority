# Sequence With Priority
To create sequence of value (*latest version is only support number, alphabet is under development*) with your chosen priority.


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

## Parameter
|Key|Data type|Default Value|Description|
|--|--|--|--|
|order|string|ASC|Order of sequence, have 2 option **ASC** and **DESC**|
|startValue|integer|0|start value of sequence
|lastValue|integer|-|last value of sequence|
|step|integer|1|Step of sequence|
|highestPriorities|array|-|The priority values that will place on the top of sequence|
