module.exports = ({ startValue, lastValue, step, order, highestPriorities }) => {

    // lastValue and startValue VALIDATION
    if(!lastValue) throw "You must include lastValue parameter!";
    if(!typeof startValue in ["number", "string"]) throw 'lastValue must be a number or alphabet string!';
    if(!typeof lastValue in ["number", "string"]) throw 'lastValue must be a number or alphabet string!';
    if(typeof startValue !== typeof lastValue) throw 'startValue and lastValue data type is different!';

    
    // step VALIDATION
    if(typeof step !== "number") throw 'step must be a number!';
    if(step < 1) throw 'step must more than 0!';
    
    // order VALIDATION
    if(!order in ['ASC', 'DESC']) throw 'order must be ASC or DESC';
    if(typeof startValue === 'number' && typeof lastValue === 'number') {
        if(order === 'ASC')
          if(startValue >= lastValue) throw 'startValue must be less lastValue';
        else if(order === 'DESC')
          if(startValue <= lastValue) throw 'startValue must be more than lastValue';
    }

    if(typeof startValue === 'string' && typeof lastValue === 'string') {
        const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        if(!alphabet.includes(startValue)) throw 'startValue must in range a - z';
        if(!alphabet.includes(lastValue)) throw 'lastValue must in range a - z';
        
        if(order === 'ASC')
            if(startValue.charCodeAt() >= lastValue.charCodeAt()) throw 'startValue must be less than lastValue';
        else if(order === 'DESC')
            if(startValue.charCodeAt() >= lastValue.charCodeAt()) throw 'startValue must be more than lastValue';
    }

    // highestPriorities VALIDATION
    if(!Array.isArray(highestPriorities)) throw 'highestPriorities must be an array!';
    if(!highestPriorities.length) throw 'highestPriorities must have values!';
    const isHighestPrioritiesItemTypesSame = highestPriorities.every((val, i, arr) => typeof val === typeof arr[0]);
    if(!isHighestPrioritiesItemTypesSame) throw 'Array data of highestPriorities, has different data type!';
    if(typeof lastValue !== typeof highestPriorities[0]) throw 'lastValue data type is not same with highestPriorities data type!';

    return {
        valid: true,
        dataType: typeof lastValue
    };

}