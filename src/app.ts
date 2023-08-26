//let x  = 10;
let x :Array<string> = ["a","b","c"];
//let x  = 10;
let y :Array<any> = ["a","b","c",1,true];


let z:any ;
z =10;
z ="stringbb";

// Parameter type annotation
function greet(name:string):string {
    console.log("Hello, " + name.toUpperCase() + "!!");
    return "hello "+name;
}
let funi:string = greet("hi");
