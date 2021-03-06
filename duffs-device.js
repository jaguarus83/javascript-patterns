var items = [];

// first variant
var iterations = Math.floor(items.length / 8),
  startAt = items.length % 8,
  i = 0;

do {
  switch (startAt) {
    case 0: process(items[i++]);
    case 7: process(items[i++]);
    case 6: process(items[i++]);
    case 5: process(items[i++]);
    case 4: process(items[i++]);
    case 3: process(items[i++]);
    case 2: process(items[i++]);
    case 1: process(items[i++]);
  }

  startAt = 0;
} while (iterations--);

// second variant
var iterations = items.length % 8,
  i = items.length - 1;

while(iterations) {
  process(items[i--]);
  iterations--;
}

iterations = Math.floor(items.length / 8);
while(iterations) {
  process(items[i--]);
  process(items[i--]);
  process(items[i--]);
  process(items[i--]);
  process(items[i--]);
  process(items[i--]);
  process(items[i--]);
  process(items[i--]);
  iterations--;
}

function process() {
  // some code
}

