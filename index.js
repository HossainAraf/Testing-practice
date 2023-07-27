function stringLength(string) {
  let numberOfChar = string.length;
  let errorMsg = 'Error! conditios are not met';
  if (1 < numberOfChar && numberOfChar < 10) {
    return numberOfChar;
  } else {
    return errorMsg;
  }

};

function reverseString(string) {
  return string.split('').reverse().join('');
}

module.exports = { stringLength, reverseString };
