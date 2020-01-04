module.exports = {
  checkParams: ({ startValue, lastValue, step, order, highestPriorities }) => {

    // lastValue and startValue VALIDATION
    if(!lastValue) throw "You must include lastValue parameter!";
    if(typeof startValue !== "number") throw 'lastValue must be a number (alphabet data type support is still under development)!';
    if(typeof lastValue !== "number") throw 'lastValue must be a number (alphabet data type support is still under development)!';
    if(typeof startValue !== typeof lastValue) throw 'startValue and lastValue data type is different!';
    
    // step VALIDATION
    if(typeof step !== "number") throw 'step must be a number!';
    if(step < 1) throw 'step must more than 0!';
    
    // order VALIDATION
    if(!order in ['ASC', 'DESC']) throw 'order must be ASC or DESC';
    if(order === 'ASC') {
      if(startValue >= lastValue) throw 'startValue must be more than lastValue';
    } else if(order === 'DESC') {
      if(startValue <= lastValue) throw 'lastValue must be more than startValue';
    }

    // highestPriorities VALIDATION
    if(!Array.isArray(highestPriorities)) throw 'highestPriorities must be an array!';
    if(!highestPriorities.length) throw 'highestPriorities must have values!';
    const isHighestPrioritiesItemTypesSame = highestPriorities.every((val, i, arr) => typeof val === typeof arr[0]);
    if(!isHighestPrioritiesItemTypesSame) throw 'Array data of highestPriorities, has different data type!';
    if(typeof lastValue !== typeof highestPriorities[0]) throw 'lastValue data type is not same with highestPriorities data type!';

    return true;
  }
};
