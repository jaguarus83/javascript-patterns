// first pattern

function recursion() {
  recursion();
}

recursion();

// second pattern

function first() {
  second();
}

function second() {
  first();
}

first();
