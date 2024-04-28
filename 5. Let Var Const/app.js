// Var - Let - Const

// Degisken nedir?

/*
var/let/const degiskenIsmi = degiskenDegeri;
let sayi=10;
*/

// var : function scope -- ram bellekte cok fazla yer kaplar.
// let/const : block scope ozelligine sahiptir.

// function sayHi(){
//     var sayHi = "Hello everyone"; // function scope
//     if(true){
//         const b = 10;
//         console.log(b);
//     }
//     console.log(sayHi)
// }


// sayHi();

// if(true){
//     let a = 5;
//     let b = 10;
//     console.log(a)
// };


//const (constant) : sabit,degismez
// const a =10;
// a = 15;
// console.log(a);

// let b = 5;
// b=7;
// b=12;
// console.log(b);

const user = {
    username :"eren",
    password :"123"
}

user.username= "erensonmez"

console.log(user)
