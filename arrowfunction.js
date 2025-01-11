let hello =" ";
hello = function(){
    return "Hello World!"
}
console.log("hello world using normal function "+hello());
 
let hello2=" ";
hello2 = (val) => "Hello" +val;
console.log("printing Hello world using Arrow function");

console.log(hello2("Vasanth"));