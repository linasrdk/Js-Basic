function findMinNumber(arr) {
  if (arr.length === 0) {
    return null;
  }

  var minNumber = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < minNumber) {
      minNumber = arr[i];
    }
  }

  return minNumber;
}

var array1 = [-10, 7, 5, 6, 0];
console.log(findMinNumber(array1)); 

var array2 = [3, 1, 0, 6, 2, 8];
console.log(findMinNumber(array2)); 

var emptyArray = [];
console.log(findMinNumber(emptyArray));

/// Для того, щоб функція шукала максимальне значення замість мінімального, потрібно змінити спосіб порівняння у циклі. Замість порівняння < потрібно використовувати >.  if (arr[i] > maxNumber)

///Якщо потрібно одразу знайти мінімальне і максимальне значення, слід змінити функцію так, щоб вона відстежувала обидва типи значень під час перебору масиву. 