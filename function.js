module.exports = {
  checkParams: ({ lastValue, highestPriorities }) => {
    if(!lastValue) throw "You must include lastValue parameter";
    if(typeof lastValue !== "number") throw 'lastValue must be a number (alphabet data type support is still under development)';

    const isHighestPrioritiesItemTypesSame = highestPriorities.every((val, i, arr) => typeof val === typeof arr[0]);
    if(!isHighestPrioritiesItemTypesSame) throw 'Array data of highest priorities, has different data type';
    if(typeof lastValue !== typeof highestPriorities[0]) throw 'lastValue data type is not same with highestPriorities data type';

    return true;
  }
};
