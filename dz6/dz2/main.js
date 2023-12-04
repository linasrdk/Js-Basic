function isPalindrome(str) {
  if (str.length <= 1) {
    return false;
  }
   
  var start = 0;
  var end = str.length - 1;

   
  while (start < end) {
    if (str[start] !== str[end]) {
      return false; 
    }
    start++;
    end--;
  }

  return true; 
}

// Приклади використання функції
console.log(isPalindrome(''));      
console.log(isPalindrome('mom'));  
console.log(isPalindrome('bag'));     
console.log(isPalindrome('dad'));    