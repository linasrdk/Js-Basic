var number1, number2;


while (true) {
  var userInput1 = prompt("Введіть перше число:");

  if (!isNaN(userInput1)) {
    number1 = parseFloat(userInput1);
    break;
  } else {
    alert("Only numbers, please.");
  }
}

while (true) {
  var userInput2 = prompt("Введіть друге число:");

  if (!isNaN(userInput2)) {
    number2 = parseFloat(userInput2);
    break; 
  } else {
    alert("Only numbers, please.");
  }
}

var sumOfOddNumbers = 0;
var productOfEvenNumbers = 1;

for (var i = Math.min(number1, number2); i <= Math.max(number1, number2); i++) {
  if (i % 2 === 0) {
    productOfEvenNumbers *= i;
  } else {
    sumOfOddNumbers += i;
  }
}
alert("Сума = " + sumOfOddNumbers + "\nДобуток = " + productOfEvenNumbers);