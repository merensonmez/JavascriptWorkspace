//Body mass index calculation

let weight = Number(prompt("Enter your weight :"));

let height = Number(prompt("Enter your height in meters :"));

let result = weight/(height*2);

if(result<18.5){
    console.log("Below ideal weight " + result);
}else if(result>=18.4 && result<=24.9){
    console.log("Below ideal weight " + result);
}else if(result>=25 && result<=29.9){
    console.log("Above ideal weight " + result);
}else if(result>=18.4 && result<=39.9){
    console.log("Much above ideal weight(obese) " + result);
}else if(result>=40){
    console.log("Much above ideal weight(morbid obese) " +result);
}
