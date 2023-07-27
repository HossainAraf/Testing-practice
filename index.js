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

// First character of a string will be capitalised
function capitalize(string) {
return string.charAt(0).toUpperCase().concat(string.slice(1));
}

module.exports = { stringLength, reverseString, capitalize};
