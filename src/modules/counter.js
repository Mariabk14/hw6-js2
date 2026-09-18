function createCounter(initialValue = 0) {
  let value = initialValue;

  return {
    increment() {
      value += 1;
      return value;
    },

    decrement() {
      value -= 1;
      return value;
    },

    getValue() {
      return value;
    },
  };
}

export default createCounter;