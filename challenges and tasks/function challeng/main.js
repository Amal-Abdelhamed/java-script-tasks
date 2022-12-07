// function sayHello (userName= "unknown", age= "unknown") {
// if (age<20){
//         console.log(` app is not suitable for your age`);
//     }
// else {
//         return`hello ${userName} your age is ${age}`;
//     }
// }
// console.log(sayHello());

//  function generateYears(start, end, exclude ){
//     for (let i = start; i <= end; i++){
//         if (i === exclude){
//             continue;
//         }
//         console.log(i);
//     }
//  }
//  generateYears(1990, 2022, 2017);

//  function calc(num1, num2, num3) {
//      return num1 + num2 + num3;
//  }
//  let result = calc(10,20,30);
//  console.log(result);

//  function generate(st, en) {
//    for ( i = st; i<= en; i++){
//     console.log(i);

//        if (i=== 15){
//            return `interrupting`
//        }

//    }
// }
// generate(10,20);
// function calc(...numbers){
//     let result =0;
//     for (i=0; i<numbers.length; i++){
//         result += numbers[i];
//     }
//     return`final result is ${result}`;
// }

// console.log(calc(1,25,8,52,22,62,10));

// function showInfo(us = "unknown", ag = "unknown", rt= 0, show= "yas", ...sk){
//     document.write(`<div>`);
//     document.write(`<h2>welcom ${us}</h2>`);
//     document.write(`<p>age : ${ag}</p>`);
//     document.write(`<p>hour rate $${rt}</p>`);
//     if (show === "yes"){
//         if (sk.length>0){
//             document.write(`<p>skills: ${sk.join(" | ")}</p>`);
//         } else {
//         document.write(`<p>skills: no skills</p>`);

//         }
//     } else {
//         document.write(`<p>skills are hidden</p>`);
//     }
//     document.write(`</div>`);
// }
// showInfo("amal",32, 30, "yes","html","css","js");

// challeng

function showDetails(a, b,c){
    let show=[a ,b,c];
    let d, e ,f;
    for (let i=0; i< show.length; i++ ){
        if (typeof show[i]=== "string"){
            d=(show[i]);
        }else(typeof show[i]==="number") ;{
            e=(show[i]);
        }
    }
    if (show.includes(true) === true){
        console.log(`hello ${d}, your age is ${e}, you are available for hire `);
    } else{
        console.log(`hello ${d}, your age is ${e}, you are not available for hire `);

    }
    
}

showDetails( 20,false,"amal");