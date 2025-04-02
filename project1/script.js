
let length = 16;
let weight = 7.5;

document.getElementById('demo1').innerHTML = `
// Number// <br>
let length = 16;<br>
let weight = 7.5;

`
let color = "red";
let lastName = "Verma";
document.getElementById('demo2').innerHTML = `

// String // <br>
let color ="red";<br>
let lastName ="Verma";

`


var x = true;
var y = false;
document.getElementById('demo3').innerHTML = `
// Booleans <br>
var  x = true; <br>
var  y = false;

`

const person = {

    FirstName: "ASHISH",
    LastName: "Verma"
};
document.getElementById('demo4').innerHTML = `

 // Obbject <br>
 const person = {
     FirstName:"ASHISH",
     LastName :"Verma"
};
 `

const cars = ["saab", "totoya", "BMW"];

document.getElementById('demo5').innerHTML = `
 // Array object <br>
  const cars = ["saab" , "totoya", "BMW"];
 `

const date = new Date("03-03-2025");


document.getElementById('demo6').innerHTML = `
 // Date object <br>
const date = new  Date ("03-03-2025");


`

//  let adding the number with string



var x = 16 + "Volvo";
document.getElementById('demo7').innerHTML = `
  //  let adding the number with string <br>
 var x = 16 +"Volvo";<br>
 result =
 ${x}
 
 `

//let adding the  number number with string 

var y = 16 + 4 + "Volvo";

document.getElementById('demo8').innerHTML = `
  
  //let adding the  number number with string <br>

    var y = 16+4+"Volvo"<br>
    result = 
   ${y}
  `



//Java Script type are Dynamic 

let z;
z = 10;
z = "Ashish";

document.getElementById('demo9').innerHTML = `
    let z;  // now z is undefined <br>
    z=10; // now z is number <br>
     z="Ashish"; // now z is string <br>
     result = 
    ${z}
 `


// JavaScript string   it is   assign in double or single qoute \

var carName1 = "Volvo XC60";

var carName2 = 'Volvo XC60';

document.getElementById('demo10').innerHTML = `
  // using double quotes<br>
 var carName1= "Volvo XC60"; <br>
// using single quotes <br>
 var carName2 = 'Volvo XC60'; <br>
  `

//javaScript number

var x = 12;
var y = 3.5;
document.getElementById('demo11').innerHTML = `
 // without  decimals  <br>
 var x = 12;<br>
// with decimals point  <br>
  var y = 3.5;
   `
// Exponential Notation 

var x = 123e5;
var y = 123e-5;

document.getElementById('demo12').innerHTML = `
  //  Here X is 12300000<br>
         var x = 123e5;<br>
  // Here y is 0.00123 <br>
          var y = 123e-5;<br>
    Result :<br> 
 ${x} <br>
  ${y}
  `

//JavaScript boolean 

  var x = 10 ;
  var y =10;
  var t = 12;

console.log(x === y) // it return true
console.log(y === t) // it return false 


  
