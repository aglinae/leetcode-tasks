var createCounter = function (init) {
  let frozenValue = init;
  return {
    increment() {
      return ++frozenValue;
    },
    reset() {
      frozenValue = init;
      return frozenValue;
    },
    decrement() {
      return --frozenValue;
    },
  };
};

let counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
