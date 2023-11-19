while (true) {
  var userInput = prompt("Введіть будь-яке число:");

  if (isNaN(userInput)) {
    alert("Only numbers, please");
    continue;
  }

  var number = parseFloat(userInput);

  if (number >= 123) {
    alert("Wow, you've ended this endless cycle!");
    break;
  }
   
    if (number < 123) {
    alert("Should continue");
    continue;
  }
}



