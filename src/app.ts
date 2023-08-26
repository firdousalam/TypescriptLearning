//let x  = 10;
let x :Array<string> = ["a","b","c"];
//let x  = 10;
let y :Array<any> = ["a","b","c",1,true];
//
 interface LoginRequest {
    emailId : string,
    password : string,
    loginType ?: string
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

// Parameter type annotation
function greet(name:string|number):string {
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