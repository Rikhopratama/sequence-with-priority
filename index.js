/**
 * @param {String or Number} 	startValue 			The first number/alphabet you want in this sequence.
 * @param {String or Number} 	lastValue 			The last number/alphabet you want in this sequence.
 * @param {Array} 						highestPriorities	The values will set to highest priorities that will place at the top of sequence. The values order would be still same as you inserted.
 */

module.exports = ({ startValue = 0, lastValue, highestPriorities }) => {
  const { checkParams } = require("./function");

	try {
		const checkParamsResult = checkParams({ lastValue, highestPriorities });

		if (checkParamsResult) {
			const result = [];

			for (const initialNumber of highestPriorities) {
				result.push(initialNumber);
			}

			while (startValue <= lastValue) {
				if (!result.includes(startValue)) {
					result.push(startValue);
				}
				startValue++;
			}

			return result;
		} else {}
		
	} catch (error) {
		throw new Error(error);
	}
  
	
};
