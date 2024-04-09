// Condition Structures

// let grade = 35;

// if(grade>50){
//     console.log("You passed , exam grade :" +grade)
// }else{
//     console.log("You failed, exam grade : " + grade);
// }

// let age = Number(prompt("Age :"));
// console.log(typeof age)
// let money = Number(prompt("Budget :"))

// if(age>=18 && money>=3000){
//     alert("You can take the driving license test.")
// }else{
//     alert("You can't take the driving license test.")
// }


// ---------- DERS ORTALAMASI BULMA -------- //

//vize1 %30 ,vize2 % 30,final %40

let vize1 = Number(prompt("Vize 1 notunuzu giriniz :"));
let vize2 = Number(prompt("Vize 2 notunuzu giriniz :"));

let final = Number(prompt("Final notunuzu giriniz :"));


let ortalama = (vize1*0.3) + (vize2*0.3) + (final*0.4);

if(ortalama>=60){
    alert("Dersten gectiniz tebrikler :) --> " + ortalama);
}else{
    alert("Kaldiniz :( --> " + ortalama)
    console.log("Kaldiniz :(")
}
