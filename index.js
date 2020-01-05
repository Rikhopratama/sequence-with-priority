/**
 * @param {String {ASC, DESC}}	order 						Order of sequence, can be ASC or DESC.
 * @param {String or Number} 		startValue 				The first number/alphabet you want in this sequence.
 * @param {String or Number} 		lastValue 				The last number/alphabet you want in this sequence.
 * @param {Number} 							step 							Step of sequence.
 * @param {Array} 							highestPriorities	The values will set to highest priorities that will place at the top of sequence. The values order would be still same as you inserted.
 */

module.exports = ({
  startValue,
  lastValue,
  step = 1,
  order = 'ASC',
  highestPriorities
}) => {
  const checkParams = require('./validation');
  const { generateNumber, generateAlphabet } = require("./function");

  try {
    // Set default value for start value
    if(!startValue){
      if(typeof lastValue === 'number') startValue = 0;
      else if(typeof lastValue === 'string') startValue = 'a';
    }

    let getSequence;
    const checkParamsResult = checkParams({
      startValue,
      lastValue,
      step,
      order,
      highestPriorities
    });

    if (checkParamsResult.valid) {
      const result = [];

      for (const initialValue of highestPriorities) {
        const valueToPush = typeof initialValue === 'string' ? initialValue.toLowerCase() : initialValue;
        result.push(valueToPush);
      };

      if(checkParamsResult.dataType === 'number') {
        getSequence = generateNumber({ result, order, step, startValue, lastValue });
      } else if(checkParamsResult.dataType === 'string') {
        getSequence = generateAlphabet({ result, order, step, startValue, lastValue });
      };

      const finalResult = result.concat(getSequence);
      if(!finalResult.includes(lastValue)) finalResult.push(lastValue);

      return finalResult;
    } else {
    }
  } catch (error) {
    throw new Error(error);
  }
};
