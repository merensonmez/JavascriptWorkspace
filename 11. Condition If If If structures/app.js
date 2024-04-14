//

/*

     name and id number
     Name : write any thing
     TCKN : creats 11 letter
*/


// let isim = prompt("Name : ")
// console.log(name)
123

let name = prompt("Write your name :");
let idnumber = prompt("Write your id number :")


// if else : iki secenegin oldugu yerde kullanilir
// if else if else : 2 den fazla secenegin oldugu yerde kullanilir
// if if if : 
check2(name,idnumber);

function check(name, idnumber){ 
    if(name!=""){ 
    if(idnumber.length ==11){
        console.log("Succesfuly login.")
    }else{
    console.log("Please write your id number 11 character")
    }
    }else{
        console.log("Please,write your name!!!")
    }
}


function check2(name,idnumber){
    if(name==""){
        console.log("Please,write your name!!!");
        return;
    }
    if(idnumber.length!=11){
        console.log("Please write your id number 11 character");
        return;
    }
    console.log("Succesfuly login.");
}