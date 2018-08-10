Array.prototype.customFilter = function (filterFn) {
  let filteredArr = [];
  this.forEach(item => {
    if (filterFn(item)) {
      filteredArr.push(item);
    }
  });

  return filteredArr;
}

[10, 20, 30, 40, 50].customFilter(x => x > 20);