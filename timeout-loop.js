var items = [1, 2, 3, 4];


function processArray(items, process, callback) {
  var todo = items.concat(); // copy of original

  setTimeout(function timeoutHandler() {
    process(todo.shift());

    if (todo.length) {
      setTimeout(timeoutHandler, 25);
    } else {
      callback();
    }
  }, 25);
}

function timeProcessArray(items, process, callback) {
  var todo = items.concat(),
    start = Date.now();
  setTimeout(function timeoutHandler() {
    do {
      process(todo.shift());
    } while(todo.length > 0 && (Date.now() - start) < 50);

    if (todo.length > 0) {
      setTimeout(timeoutHandler, 25);
    } else {
      callback();
    }
  }, 25);
}

