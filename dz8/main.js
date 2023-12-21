function loggingDecorator(fn) {
  return function (...args) {
    console.log(`${fn.name}, args: ${args.join(', ')}`);
    return fn.apply(this, args);
  };
}


function add(a, b) {
  return a + b;
}

const loggedAdd = loggingDecorator(add);
loggedAdd(2, 3);
