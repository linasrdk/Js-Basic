//variant1

var userInput = prompt("Введіть будь-яке значення:");

if (!isNaN(userInput) && !isNaN(parseFloat(userInput))) {
    alert("You entered a number");
} else if (userInput.toLowerCase() === "true" || userInput.toLowerCase() === "false") {
   alert("You entered a boolean");
} else  {
   alert("You entered a complex data");
}


//variant2
//var userInput = prompt("Введіть будь-яке значення:");

//switch (true) {
 //   case !isNaN(userInput):
  //      alert("You entered a number");
  //      break;
  //  case userInput.toLowerCase() === "true" || userInput.toLowerCase() === "false":
  //      alert("You entered a boolean");
  ///      break;
 //  default:
  //      alert("You entered a complex data");
//}
