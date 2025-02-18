function capitalize(str) {
  return str.at(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
  return str.split('').reverse().join('');
}
//charCodeAt() fromCharCode()
const calculator = {
  add: (num1, num2) => {
    return num1 + num2;
  },
  subtract: (num1, num2) => {
    return num1 - num2;
  },
  divide: (num1, num2) => {
    return num1 / num2;
  },
  multiply: (num1, num2) => {
    return num1 * num2;
  },
};

function caesarCipher(str, factor) {
  return str
    .split('')
    .map((char) => {
      let charCode = char.charCodeAt(0);
      if (charCode < 65 || charCode > 122 || (charCode > 90 && charCode < 97)) {
        return char;
      }
      charCode += factor;
      if (charCode > 122 || (charCode > 90 && charCode < 97)) {
        charCode -= 26;
      }
      return String.fromCharCode(charCode);
    })
    .join('');
}

function analyzeArray(numsArr) {
  return {
    average: numsArr.reduce((prev, curr) => prev + curr, 0) / numsArr.length,
    min: Math.min(...numsArr),
    max: Math.max(...numsArr),
    length: numsArr.length,
  };
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
