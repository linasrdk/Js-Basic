function customParseInt(str) {
  if (str.length === 0) {
    return NaN;
  }

  var result = 0;

  for (var i = 0; i < str.length; i++) {
    var digit = str[i] | 0;

    result = result * 10 + digit;
  }

  return result;
}

console.log(customParseInt('15'));  
console.log(customParseInt('376'));     
console.log(customParseInt('0')); 

//потрібно змінити функцію так, щоб вона приймала другий аргумент - основу системи числення, і враховувала цю основу при конвертації.
