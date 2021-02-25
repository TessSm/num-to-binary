const number = parseInt(prompt('Enter a decimal number: '));
const result = number.toString(2);
document.getElementById("hi").innerHTML = 'Binary:' + ' ' + result;