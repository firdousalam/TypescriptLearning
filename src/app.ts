//let x  = 10;
let x :Array<string> = ["a","b","c"]; // 2
//let x  = 10;
let y :Array<any> = ["a","b","c",1,true]; //touple
//
/*
type Person = {
    name: string;
    age: number;
  }
  type Person = {
    phone: string;
  }
  */
interface LoginRequest {
    emailId : string,
    password : string,
    loginType ?: string
 }
 interface LoginRequest {
   
    mobile ?: string
 }
interface LoginResponse {
    emailId ?: string,
    mobileNo ?: number,
    Name ?: string
}
//

let z:any ;
z =10;
z ="stringbb";
let m = null; // null
let n;
console.log(n); //undefined
console.log(x[4]); //undifined
// Parameter type annotation
function greet(name:string|number|undefined|null):string {
    if(typeof name == 'string'){
        console.log("Hello, " + name.toUpperCase() + "!!");
    }
    return "hello "+name;
}
let funi:string = greet("hi");
let fun2:string = greet(10);
let a = "kaustav";



let loginRequest:LoginRequest = {
    "emailId" : "xyz@gmail.com",
    "password" : "cfsfsffdfd",
    "loginType" : "UserLogin"
}

let userDetails :LoginResponse = loginUser(loginRequest);

function loginUser(loginRequest: LoginRequest):LoginResponse {
    console.log(loginRequest.loginType);
    // db checking
    //it get Data from Databse 
   // return it to user
   let response : LoginResponse = {
        "emailId" : "vvcvcvvc.gmail.com",
        "mobileNo" : 9888765545,
        "Name" : "firdous alam"
   }
    return response;
}

let x2:string | number = "HI";//
x2.toUpperCase(); 
//x2 = 10.0;
//if(typeof x == 'string'){
    console.log(parseFloat(x2)/0);  //NaN
//}
let unionVar : string|number | LoginResponse;
// angular
class Car { 
    //field 
    engine:string; 
  
    //constructor 
    constructor(engine:string) { 
       this.engine = engine 
    }  
    ngInit(){
     //   fetchAPI calling machanism where data get called on page load
    }
    //function 
    disp():void { 
       console.log("Engine is  :   "+this.engine) 
    } 
 }

 //angular nestjs nextjs  react


 module TutorialPoint { 
    export function add(x, y) {  
       console.log(x+y); 
    } 
 }
 /*
 // child procress i.e its apart of one big application
 Namespace Syntax (New)
 namespace TutorialPoint { 
    export function add(x, y) { console.log(x + y);} 
 }
 */