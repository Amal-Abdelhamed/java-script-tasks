//static method
var name= "Ali";
var age=30;
var obj ={};
// Object.defineProperty(obj,"name",{
//     value:name,
// })


Object.defineProperties(obj,{
    name:{
        value:name,
        writable:false,
        configurable:true,
    },
    age:{
        value:age,
        writable:true,
        configurable:false,
    }
})

//data descriptor

//value:undefined
//writable:false ===> can update prob or not
//configurable:false  ===> can delete prob or not
//enumerable :false ===> can loop & see prob or not(for(var i in obj))

console.log(obj.name);
obj.name="mostafa";
console.log(obj.name);
delete obj.name
console.log(obj.name);
for(var i in obj);
console.log(i+":"+obj[i]);
//////////////////////////////
console.log(obj.age);
obj.age=33;
console.log(obj.age);
delete obj.age
console.log(obj.age);
for(var i in obj);
console.log(i+":"+obj[i]);



