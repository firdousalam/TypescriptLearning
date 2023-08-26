"use strict";
//let x  = 10;
let x = ["a", "b", "c"];
//let x  = 10;
let y = ["a", "b", "c", 1, true];
let z;
z = 10;
z = "stringbb";
// Parameter type annotation
function greet(name) {
    console.log("Hello, " + name.toUpperCase() + "!!");
    return "hello " + name;
}
let funi = greet("hi");
// Parameter type annotation
function greet1(name) {
    console.log("Hello, " + name.toUpperCase() + "!!");
    return "hello " + name;
}
let funi2 = greet("hi");
let func3 = funi + funi2;
console.log(x);
