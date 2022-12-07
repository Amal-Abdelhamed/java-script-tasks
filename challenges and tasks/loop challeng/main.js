// for (let i=0 ; i<10 ;i++){
// console.log(i);
// }

// let myfriends=[1, 2, "amal", "eman", "seham","esraa"];
// let names=[];
// for (let i=0; i<myfriends.length; i++){
//     if (typeof myfriends[i]==='number'){

//         names.push(myfriends[i]);
//     }
// }
// console.log(names)


// for (let i=0; i<myfriends.length;){
// console.log(myfriends[i]);
// i++
// }
// //  *********************
// let products = ["keyword" ,"mouse","pen", "pad", "monitor","iphone"];
// let colors =["red","green","blue"];
// let showcount = 5;

// document.write(`<h1>show ${showcount} products</h1>`);
// for (let i=0; i<showcount; i++) {
//         document.write(`<div>`);
//         document.write(`<h3>[${i + 1}] ${products[i]}</h3>`);
//     for( let j=0; j<colors.length; j++) {
//         document.write(`<p>${colors[j]}</p>`);
//     }
//     document.write(`</div>`);
// }

// chalenge 

let myadmins = ["ahmed", "osama", "sayed","samira","stop","samira","samira","samira","samira"];
let myemployees = ["amgad","samah","amir","omar","othman", "soma", "amal","ahmed","seham"];
let admins = [];
for ( let i = 0 ; i<myadmins.length; i++) {
    if (myadmins[i] === "stop") {
        break;
    }
    admins.push(myadmins[i]);

}
document.write(`<div>we have ${admins.length} admins</div>`);
document.write("_".repeat(30));

for ( let j = 0  ; j<admins.length; j++ ) {
    let n=1;
    document.write(`<div>the admin for team ${j + 1} is ${admins[j]}</div>`);
    document.write(`<div>team members</div>`);
    for ( let k = 0  ; k< myemployees.length ; k++  ) {
        if (myemployees[k][0] === admins[j][0] ) {
                document.write(`<div>-${n} ${myemployees[k]}</div>`);
                n++ ;
        }
    }
    document.write("_".repeat(30));
}
