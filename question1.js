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

