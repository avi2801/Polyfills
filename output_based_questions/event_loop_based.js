// Output-based JavaScript Questions on Event Loop, Callback Queue, and Microtask Queue

// Q1
console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
console.log("End");

// Q2
console.log("A");
setTimeout(() => console.log("B"), 1000);
console.log("C");
setTimeout(() => console.log("D"), 500);

// Q3
console.log("X");
setTimeout(() => console.log("Y"), 0);
Promise.resolve().then(() => console.log("Z"));
console.log("W");

// Q4
setTimeout(() => console.log("setTimeout 1"), 0);
Promise.resolve().then(() => console.log("Promise 1"));
setTimeout(() => console.log("setTimeout 2"), 0);
Promise.resolve().then(() => console.log("Promise 2"));

// Q5
async function test() {
  console.log(1);
  await Promise.resolve();
  console.log(2);
}
console.log(3);
test();
console.log(4);

// Q6
async function foo() {
  console.log("foo start");
  await bar();
  console.log("foo end");
}
async function bar() {
  console.log("bar");
}
console.log("script start");
foo();
console.log("script end");

// Q7
console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => {
  console.log("Promise");
  setTimeout(() => console.log("Inside Promise Timeout"), 0);
});
console.log("End");

// Q8
setTimeout(() => console.log("setTimeout"), 0);
Promise.resolve().then(() => {
  console.log("Promise 1");
  return Promise.resolve();
}).then(() => console.log("Promise 2"));

// Q9
async function f1() {
  console.log("f1 start");
  await f2();
  console.log("f1 end");
}
async function f2() {
  console.log("f2");
}
console.log("script start");
setTimeout(() => console.log("setTimeout"), 0);
f1();
console.log("script end");

// Q10
console.log("Start");
setTimeout(() => console.log("Timeout 1"), 0);
setTimeout(() => console.log("Timeout 2"), 0);
Promise.resolve().then(() => console.log("Promise 1")).then(() => console.log("Promise 2"));
console.log("End");

// Q11
setImmediate(() => console.log("setImmediate 1"));
setTimeout(() => console.log("setTimeout 1"), 0);
setImmediate(() => console.log("setImmediate 2"));
setTimeout(() => console.log("setTimeout 2"), 0);

// Q12
setTimeout(() => {
  console.log("Timeout 1");
  setTimeout(() => console.log("Timeout 2"), 0);
}, 0);
Promise.resolve().then(() => {
  console.log("Promise 1");
  return Promise.resolve();
}).then(() => console.log("Promise 2"));

// Q13
setTimeout(() => console.log("setTimeout 1"), 0);
Promise.resolve().then(() => {
  console.log("Promise 1");
  setTimeout(() => console.log("setTimeout 2"), 0);
});
console.log("End");

// Q14
async function asyncFunc() {
  console.log("asyncFunc start");
  await new Promise((resolve) => setTimeout(resolve, 0));
  console.log("asyncFunc end");
}
console.log("Script start");
asyncFunc();
console.log("Script end");

// Q15
console.log("Start");
setTimeout(() => {
  console.log("Timeout 1");
  Promise.resolve().then(() => console.log("Promise inside Timeout"));
}, 0);
Promise.resolve().then(() => console.log("Promise 1"));
setTimeout(() => console.log("Timeout 2"), 0);
console.log("End");

// Q16
setTimeout(() => console.log("setTimeout"), 0);
Promise.resolve().then(() => console.log("Promise 1"));
queueMicrotask(() => console.log("queueMicrotask 1"));
Promise.resolve().then(() => console.log("Promise 2"));
console.log("Script end");

// Q17
Promise.resolve().then(() => {
  console.log("Promise 1");
  return Promise.resolve().then(() => {
    console.log("Promise 2");
    return Promise.resolve();
  }).then(() => console.log("Promise 3"));
}).then(() => console.log("Promise 4"));
setTimeout(() => console.log("setTimeout"), 0);

// Q18
console.log("A");
setTimeout(() => {
  console.log("B");
}, 0);
Promise.resolve().then(() => {
  console.log("C");
  setTimeout(() => console.log("D"), 0);
});
console.log("E");
