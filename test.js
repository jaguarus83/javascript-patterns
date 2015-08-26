var startTime, endTime;

startTime = Date.now();
for (var i = 0; i < 1000000; i++) {
  process(i);
}
endTime = Date.now();
console.log('time: ', endTime - startTime);

startTime = Date.now();

for (var i = 0; i < 1000000; i += 3) {
  process(i);
  process(i);
  process(i);
}
endTime = Date.now();

console.log('time: ', endTime - startTime);


function process(i) {
  var s = Math.random();
  s = s * s;
}
