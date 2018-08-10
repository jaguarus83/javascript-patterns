Array.prototype.customReduce = function (reducer, initialValue) {
  let arr = this;
  let acc = initialValue;

  arr.forEach(function (value, index) {
    if (acc !== undefined) {
      acc = reducer(acc, value, index, arr[index], arr);
    } else {
      acc = value;
    }

  });

  return acc;
};

[1, 2, 3, 4].customReduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 5);