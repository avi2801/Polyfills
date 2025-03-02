// 1️⃣ `this` in a global function
console.log(this); // In browser: `window`, In Node.js: `{}`

// 2️⃣ `this` inside an object method
const obj1 = {
  name: "Avinash",
  getName: function() {
    console.log(this.name);
  }
};
obj1.getName();

// 3️⃣ `this` inside an arrow function
const obj2 = {
  name: "Avinash",
  getName: () => {
    console.log(this.name);
  }
};
obj2.getName(); // `undefined` because arrow function inherits `this` from global scope

// 4️⃣ `this` inside a function (non-strict mode)
function showName() {
  console.log(this);
}
showName(); // `window` in browsers

// 5️⃣ `this` inside a function (strict mode)
"use strict";
function showStrictName() {
  console.log(this);
}
showStrictName(); // `undefined`

// 6️⃣ `this` inside a constructor function
function Person(name) {
  this.name = name;
}
const p1 = new Person("Avinash");
console.log(p1.name);

// 7️⃣ `this` inside a class
class PersonClass {
  constructor(name) {
    this.name = name;
  }
  show() {
    console.log(this.name);
  }
}
const p2 = new PersonClass("Avinash");
p2.show();

// 8️⃣ `this` inside an event listener
document.body.addEventListener("click", function() {
  console.log(this); // refers to the `body` element
});

// 9️⃣ `this` inside setTimeout (regular function)
const obj3 = {
  name: "Avinash",
  show: function () {
    setTimeout(function () {
      console.log(this.name);
    }, 1000);
  }
};
obj3.show(); // `undefined`

// 🔟 Fixing `this` inside setTimeout (arrow function)
const obj4 = {
  name: "Avinash",
  show: function () {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  }
};
obj4.show(); // "Avinash"

// 1️⃣1️⃣ `this` inside a nested function
const obj5 = {
  name: "Avinash",
  outer: function () {
    function inner() {
      console.log(this.name);
    }
    inner();
  }
};
obj5.outer(); // `undefined`

// 1️⃣2️⃣ Fixing nested function issue (arrow function)
const obj6 = {
  name: "Avinash",
  outer: function () {
    const inner = () => {
      console.log(this.name);
    };
    inner();
  }
};
obj6.outer(); // "Avinash"

// 🎯 BONUS: `this` inside forEach
const obj7 = {
  name: "Avinash",
  show: function() {
    ["A", "B", "C"].forEach(function(letter) {
      console.log(this.name, letter);
    });
  }
};
obj7.show(); // `undefined A`, `undefined B`, `undefined C`

// ✅ Fixing forEach issue with arrow function
const obj8 = {
  name: "Avinash",
  show: function() {
    ["A", "B", "C"].forEach(letter => {
      console.log(this.name, letter);
    });
  }
};
obj8.show(); // "Avinash A", "Avinash B", "Avinash C"
