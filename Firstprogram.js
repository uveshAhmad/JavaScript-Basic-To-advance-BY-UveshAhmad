// ----------------------------------OBJECTS--------------------------------------------//
let rectangle = {
  length: 1,
  breath: 2,
  draw: function () {
    //Function ko object me likhne se Method Bol dete hai ; yeh method hai
    console.log("Uvesh"); //  rectangle.draw()== "Uvesh"    print hoga Console me
    // rectangle.draw== check karo kya aata hai  aaya hai
  },
};
let rectangle1 = {
  length: 1,
  breath: 2,
  draw: function () {
    console.log("Uvesh1");
  },
};
let rectangle2 = {
  length: 1,
  breath: 2,
  draw: function () {
    console.log("Uvesh2");
  },
};

// ----------------------------------------CREATION OF OBJECT --------------------------------------------------//

// Repeating se bachne ke liye  FACTORY FUNCTION   ya  CONSTRUCTOR FUNCTION

//   1>.  Through  Factory Function

function createRectangle(length, breath) {
  return (rectangle3 = {
    length,
    breath,
    // lentth : len,
    // breath : bred,   // jab maine pararmeter me arguments len bred pass kiye honge jab equal to lagega vrna single ho to vhi define kr dete hai ;
    draw: function () {
      console.log("UveshAhmad");
    },
  });
}
let rectangleOBJ = createRectangle(5, 20);

// 2>.    Through  CONSTRUCTOR FUNCTION
// notation pascal  Notation hota hai== first letter Capital hoga
function Square(len, bre) {
  //this                                                           // this == empty object ko darsha rha hai abho to
  this.length = len; // yha this current object ko dikhatat hai
  // current obj ko reffer krta hai
  //new Keyword  empty object create krta hai

  this.breath = bre;
  this.draw = function () {
    console.log("Constructor Function");
  };
}

let SquareOBJ = new Square(100, 100);

//--------------Dynamic Nature of Objects  ( koi bhi property add kr skta hu koi bhi remove kar sakta hai)-------------//

SquareOBJ.color = "yellow"; // dynamic time par assign kar sakte hai property ko
console.log(SquareOBJ);
delete SquareOBJ.draw;
console.log(SquareOBJ);

// constructor Property

// Function are Objects
// .operator se access kar sakte hai

//---------------------------------------------PRIMITIVE-----------------------------------------------//
let a = 5;
let b = a;
a++;
console.log(a); // a=6
console.log(b); // b=5

// -------------------------------------------REFRENCE TYPE------------------------------------------//
let c = { value: 5 };
let d = c;
console.log(c); // c=6
console.log(d); // d=6;

let A = 5;
function inc(A) {
  // primitive pass hoga to copy banegi
  A++;
}
inc(A); // function calling;
console.log(A);

let B = { values: 50 };
function Inc(B) {
  B.values++;
}
Inc(B); // function calling
console.log(B.values);

let circle = {
  radius: 5,
  diameter: 10,
};

// -----------------------------------------LOOPs-----------------------------------------------------//

// for In Loop
for (let key in circle) {
  // keys are reflected to key Variable ;
  //Value are reflected  through Circle Variable;
  console.log(key, circle[key]);
}
// For Of Loop (only for iterables pr lga sakte hai like array , maps etc.)

// for(let key of circle){

//    // console.log(key , circle[key]);  //  Error ayega kyoki objevcts iterable nahi hai
// }

// Hack iska -------

//  for(let key of circle.keys(circle)){
//      console.log( key);
//  //  Error nahi ayegi   objevcts iterable  bna diya array ki tarha ;
// // }
//  }

// -----------------------------------Objeccts Property Show ------------------------------------------------//
let rhombos = {
  length: 100,
  breath: 500,
};
if ("color " in rhombos) {
  // agar me color ki jagha length ya breath daalta to Present print hoga ;
  console.log(" Present");
} else {
  console.log("Absent");
}

// ---------------------------------Object Cloning-----------------------------------//

// agar ham ek objrct bna kr dusre me use assign krte hai to vo new object nahi bnate hai ham clonning ki help se new object create karenge
// There are 3 method of cvlonning objects
// 1). by For in LOOP;
// 2). by  inbuilt function assign ka use krke ;
// 3) . By three dots (... )  kr skte hai ;

// 1). by For in LOOP;
let obj1 = {
  name: "Ashab",
  Class: 7,
  age: 24.5,
};
let temp_obj = {};

for (key in obj1) {
  temp_obj[key] = obj1[key];
}
obj1.Class++;
console.log(temp_obj);

// 2). by  inbuilt function assign ka use krke ;
let obj2 = {
  name: "Aksha",
  Class: 13,
  age: 17.5,
};
let temp_obj2 = {};
Object.assign(temp_obj2, obj2);
obj2.age++;
console.log(temp_obj2);
console.log(obj2);

// 3) . By three dots (... )  kr skte hai ;

//------------------------------------------- Inbuilt Object Maths Function--------------------------------------//

console.log(Math.random()); // 0-1 ke beechbke koi bhi number aa jate hai ;
console.log(Math.PI); // Math.PI is not a function;
console.log(Math.round(20.36));
console.log(Math.max(2, 3, 5, 7, 11));
console.log(Math.min(4, 5, 2, 1, 7, 0));
console.log(Math.abs(-67));

// -------------------------------------------------------Strings----------------------------------------//

// Strings are Two types in Javascript--- 1) Primitive .  2) Object

// 1 . Primitive  Syntax;
let name = "Uvesh Ahmad"; // Primitive
let name2 = new String("Uvesh Bhaiyya"); // Object
console.log(name);
console.log(name2);
console.log(typeof name);
console.log(typeof name2);

//Primitive ko (name.) dot operator lgate hi vo Object bn jaata hai ;
console.log(name2.indexOf(3));
console.log(name2.includes("Uv"));
console.log(name2.charAt(4));
console.log(name2.endsWith("a"));
console.log(name2.replace("U", "K"));
console.log(name2.toLowerCase());
console.log(name2.toUpperCase());
console.log(name2.length);
console.log(name2.trimStart("a"));
console.log(name2.search("y"));
console.log(name2.trim());
let message = "This is my First Message";
let words = message.split(" ");
console.log(words);
console.log(message.replace("First", "Last"));
//Escape Notation;
let message2 = "This is \n my First'  \n Message";
console.log(message2);
console.log(`This is ' my First
    ${name2},                   
     code , Bhaiyya 
     uvesh ahmad `); // Backticks;  // dynamically $ assign Arrow

//-----------------------------------------------------------DATE-----------------------------------------------------------------------------------//

let date2 = new Date();
console.log(date2);
let date3 = new Date(2001, 5, 20, 7);
console.log(date3);
date3.setFullYear(2002); //jab ham koi value ko set karte hai use SETTER kehte hai ;
console.log(date3); // jab hame recieve hogi value us eGEtter kehte hai ;

//--------------------------------------------------------ARRAYS---------------------------------------------------------------------//

// also stored different types of data;    object h ek type ka ARRAy;

//syntax - :
let numbers = [1, 3, 4, 5, 6, 7, 8];
let numbers2 = [1, 2, 3, 2, 2, 2, 2];
console.log(numbers2);
console.log(numbers);
console.log(numbers[4]);
numbers.push(7); // baad me print kroge to dikhega
console.log(numbers.splice(2, 0, "a", "b ", "c"));
console.log(numbers);

// Insertion

let nukmbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//  1) END>> PUSH
nukmbers.push(123);

// Begin>>  UNSHIFT
nukmbers.unshift(123);

// Mid >> SPLICE
nukmbers.splice(3, 0, "a", "b", "c"); // indexing  , kitne element htane hai  , jo add karne haui vo likh do ;

console.log(nukmbers);

let sankhiya = [9, 8, 7, 6, 5, 4, 3, 2];
// Searching
console.log(sankhiya.indexOf(9));
// check number h ya nahi hai
if (sankhiya.indexOf(2) != -1) {
  console.log("Present");
} else {
  console.log("absent");
}

console.log(sankhiya.includes(7)); // True
console.log(sankhiya.includes(100)); //FALSE

// another method od number checkung
console.log(sankhiya.indexOf(4, 2)); // (kis number  check katrna hai , konsa index se check karna start karna hai) ;
// matlab hua kya 4  inex 2(7-2) ke beech me hai ya nahi  hai
// yeh index print karga target element ka
// indexOf method ke duara me object ke index nahi bta sakta hu

//                                             Object Wala ARRAY


// objects ko compare karne ke liye do method hote hai

// 1) Call Back Function

let obj = [
  { no: 1, Name: "Uvesh DON" },
  { no: 2, Name: "Ashab Vaardaat" },
];
let course = obj.find(function (course) {
  // andar wle Function ko   Predicate Function kehte hai ;
  //
  return course.Name === "Uvesh DON";
});
console.log(course);

// 2) Arrow Function

let batch = obj.find((batch) => batch.Name === "Ashab Vaardaat"); // SYNTAX yaad rakho iska ok ;
console.log(batch);

//Removing Element;

let arr = [4, 5, 6, 7, 8, 9, 10];

//1) end     pop();
arr.pop();
console.log(arr);

//2) Start   shift();
arr.shift();
console.log(arr);

//3)Mid      splice();
arr.splice(2, 1);
console.log(arr);

// Emptying an ARRAY;

let num = [1, 2, 3, 4, 5];
console.log(num);
num = [];
console.log(num);

// second Method
let num2 = [0, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(num2);
num2.length = 0;
console.log(num2);
// loop lga kr pop lga denge or khaali kar denge ;

// Combining  an ARRAY:

let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
let combineds = arr1.concat(arr2);
console.log(combineds);

// SLICE an ARRAY

let cut = combineds.slice(2, 4); // range pehle wale ko incvlude karte hai baad vale ko exclude karte hai ;
// print vahi element honge jo iski Range me a rahe hai ;
let copy = combineds.slice(); // same array ki copy ban jayegi;
console.log(cut);

// Spread OPERATOR
let numb1 = [1, 2, 3, 4, 5];
let numb2 = [1, 2, 3, 4, 5];
let comb = [...numb1, "a", "b", ...numb2];
console.log(comb);

// Iterate an ARRAY (Travesre LOOP) For-OFF LOOP;
let arrr = [10, 30, 40, 50];
for (let val of arrr) {
  console.log(val);
}

// Iterate an ARRAY (Travesre LOOP) For-Each LOOP;
arrr.forEach(function (numbers) {
  // for each me call back function lgate hai ;
  console.log(numbers);
});
// Arrow Function Banane ke liye 3 steps ote hai
// step 1 - function ko hta kar arrow lga do
// Step 2- banana bracket hta do agar ek hi argument ho
// Step 3- ek hi body ho to curly brces bhi hta do
arrr.forEach((element) => console.log(element));

// Joining Arrays :
let no = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let temp = no.join();
console.log(no);

// Split the array
let messa = "This is my first Lecture";
let temp2 = messa.split(" "); // to convert String into Array;
console.log(temp2);
let joins = temp2.join("_");
console.log(joins);

// SORTING  in accending Order;
let array = [9, 7, 5, 4, 2, 1, 6, 9, -4];
array.sort();
console.log(array);
// SORTING in decending Order;
array.reverse();
console.log(array);

//Filtering Array
let num4 = [5, 6, -4, 3, 3, -2, 6, 79, 0, 8, 7, -5];
let khali = num4.filter(function (value) {
  return value >= 0;
});
console.log(khali);
// Arrow function me convert kro
let khaali = num4.filter((value) => value >= 0);
console.log(khaali);

// Mapping Array
let sank = [4, 6, 8, 3, 2, 8, 9];
let man = sank.map(function (value) {
  return "student_no" + value;
});
console.log(man);

// Arrow Function me convert kro
let objj = sank.map((elem) => "student_no" + elem);
console.log(objj);

// Mapping With Objects;
let nam = [1, 2, -6, -9];
let filtered = nam.filter((value) => value > 0);
let iteam = filtered.map(function (num) {
  let a = { values: num };
  return a;
});
console.log(a);
