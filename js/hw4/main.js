var userInput = prompt("Введіть будь-яке число:");


/// Число ділиться на 3 без залишку

//first variant
//if (userInput % 3 === 0) {
  //  alert("Fizz");
//} else {
 //   alert("Число не ділиться на 3 без залишку");
//}

//second variant
var number = parseInt(userInput);
switch (true) {
    case (number % 3 === 0):
        alert("Fizz");
        break;
    default:
        alert("Число не ділиться на 3 без залишку.");
}


// число ділиться на 5 без залишку

// first variant
//var number = parseFloat(userInput);
//if (!isNaN(number) && number % 5 === 0) {
 // alert("Buzz");
//} else {
 //  alert("Число не ділиться на 5 без залишку.")
//};

// second variant
var number = parseInt(userInput);
switch (number % 5) {
  case 0:
    alert("Buzz");
    break;
  default:
    alert("Число не ділиться на 5 без залишку");
}

// число ділиться на 3, і на 5 без залишку

// first variant
//var number = parseFloat(userInput);
//if (!isNaN(number) && number % 3 === 0 && number % 5 === 0) {
 //  alert("FizzBuzz");
//} else {
 //  alert("Це число не ділиться на 3 і на 5 без залишку")
//};

// second variant
var number = parseInt(userInput);
switch (true) {
  case (number % 3 === 0 && number % 5 === 0):
    alert("FizzBuzz");
    break;
  default:
    alert("Це число не ділиться на 3 і на 5 без залишку");
}

// число не ділиться на 3 чи на 5

//first variant
//if (userInput % 3 !== 0 && userInput % 5 !== 0) {
//  alert("Non Divisible");
//} else {
  // alert("Число ділиться на 3 aбо на 5")
//}

// second variant
var number = parseInt(userInput);
switch (true) {
    case (number % 3 !== 0 && number % 5 !== 0):
      alert("Non Divisible");
    break;
    default:
      alert("Число ділиться на 3 або на 5");
}
