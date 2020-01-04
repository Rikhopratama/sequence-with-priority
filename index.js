/**
 * @param {String {ASC, DESC}}	order 						Order of sequence, can be ASC or DESC.
 * @param {String or Number} 		startValue 				The first number/alphabet you want in this sequence.
 * @param {String or Number} 		lastValue 				The last number/alphabet you want in this sequence.
 * @param {Number} 							step 							Step of sequence.
 * @param {Array} 							highestPriorities	The values will set to highest priorities that will place at the top of sequence. The values order would be still same as you inserted.
 */

module.exports = ({
  startValue = 0,
  lastValue,
  step = 1,
  order = 'ASC',
  highestPriorities
}) => {
  const { checkParams } = require("./function");

  try {
    const checkParamsResult = checkParams({
      startValue,
      lastValue,
      step,
      order,
      highestPriorities
    });

    if (checkParamsResult) {
      const result = [];

      for (const initialNumber of highestPriorities) {
        result.push(initialNumber);
      };

			if(order === 'ASC') {
				while (startValue <= lastValue) {
					if (!result.includes(startValue)) {
						result.push(startValue);
					}
					startValue += step;
				}
			} else if(order === 'DESC') {
				while (startValue >= lastValue) {
					if (!result.includes(startValue)) {
						result.push(startValue);
					}
					startValue -= step;
				}
			}
      

      return result;
    } else {
    }
  } catch (error) {
    throw new Error(error);
  }
};
