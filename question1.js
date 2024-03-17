const birthyear = 2012;
let century;
if (birthyear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

// type coersion
console.log("10" - "3" - "4" - 2 + "5");

let height;
if (height) {
  console.log("hey hieght is defined");
} else {
  console.log("height is undefined");
}

// const favourite=prompt("what your name") // this is a built in function in web browser so we can use use it outside of the web brpswer
// console.log(favourite)

//switch statement --alternative way of writing complicated if/else statements

const day = "wed";

switch (day) {
  case "monday":
    console.log("monday is a trash day");
    break;
  case "tuesday":
    console.log(
      "tuesday is the religious day in hindusm so we dont eat eggs and meat that day"
    );
    break;
  default:
    console.log("none");
    break; // here its no need to write break bcoz its the last statement which means it will automatically exit the switch statement
}

// conditional(ternary operator)

const age=23;
age>18?console.log("drink wine"):console.log("drink water") // we dont use this style we basically make expressions and then store it ❌

const drink=age>18?"wine":"water"; // right way of using conditional operator ✅
console.log(drink)

console.log(`i would like to order ${age>=18?"wine":"water"}`) // we can use ternary operator inside template literal ✅

const years= new Array(1192, 222,222,2211) //it is used to create new instance of an array
console.log(years)

const names=['kritika', 'shikha','roshni', 'ankita','karuna','vanshikha','niral','ayushi']
const newnames=names.push('shruti') // it will add the shurti element in the last , it wil mutate the array,and it will return length✅
console.log(names,newnames)

console.log(names.unshift('bhupender'), names)// it will also add the element but at the start✅

//pop method
console.log(names.pop())

console.log(names.indexOf("hi")) // if that element is not present that i will give -1✅