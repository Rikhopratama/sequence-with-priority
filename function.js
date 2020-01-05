module.exports = {

  generateNumber({ result, order, step, startValue, lastValue }) {
    const sequence = []
    if(order === 'ASC') {
      while (startValue <= lastValue) {
        if (!result.includes(startValue)) {
          sequence.push(startValue);
        }
        startValue += step;
      }
    } else if(order === 'DESC') {
      while (startValue >= lastValue) {
        if (!result.includes(startValue)) {
          sequence.push(startValue);
        }
        startValue -= step;
      }
    }

    return sequence;
  },

  generateAlphabet({ result, order, step, startValue, lastValue }) {
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const sequence = [];

    const startIndex = alphabet.findIndex(dt => dt === startValue);
    const lastIndex = alphabet.findIndex(dt => dt === lastValue);
    
    if(order === 'ASC') {
      for(let i = startIndex; i <= lastIndex;) {
        result = result.map(v => v.toLowerCase());
        if(!result.includes(alphabet[i])) sequence.push(alphabet[i])
        i += step;
      }
    } else if(order === 'DESC') {
      for(let i = startIndex; i >= lastIndex;) {
        result = result.map(v => v.toLowerCase());
        if(!result.includes(alphabet[i])) sequence.push(alphabet[i])
        i -= step;
      }
    }

    return sequence;

  }

};
