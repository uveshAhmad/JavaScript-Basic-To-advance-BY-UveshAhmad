 //-----------------------------------------------FUNCTION------------------------
 run();   // upar bhi chalega bhaiyya ye 
 function run(){
    console.log("running");
 };
 run();                  // hoisting


 //function assignment


 //stand();      // yaha nahi chaleg upar ye ;
  let stand =function walk(){
    console.log("walking");
 };
 stand();       //yeh chalega 
 //walk();       // yeh nahi chalega 
 let jump = stand;
 jump();

 // anonymous Function assignment;
 let stand1 =  function(){   // jaha upar walk lga hua hai me vo hta sakta hu 
    console.log("walking");
 };
 stand1();

 // HOISTING
// process of moving fun decleration top of file done automatic by JS  Engine;

function sum(a , b){
    return a+b
};
console.log(sum(1,2));
//console.log(sum(1));    b ki value undefined hogi or print hoga " not a numer";
console.log(sum(1,4,7,9,7)); /// sirf start ki arguments lega ye 

// special obj (Arguments) me aate hai bache hue function ke arguments
 

// Rest Operator (...);  Rest Parameter;
function som(num , value , ...args ){   // array ke andar store ho jayega;
   console.log(args);                 // num -> 1 , value -> 2; baaki arguments me jayenge
}
som(1,2,5,7,8,9);   // bache hue arguments  print kr dega ;


//Default Parameter
 function intrest (p,r=5,y=6){  // r=5 default parametr bn gya ok agr badlenge to badl jayega but nahi hai to ye default use hi hoa 
   return p*r*y/100;   // jaha se default parameter bnaye vha se aage ke sabhi paremetr default hi bnane padenge
 }
 console.log(intrest(1000,10,5)); //500
 console.log(intrest(1000,10));   //600

// Getter Setter 
// Getter - property ko access kar skte hai ;
// Setter - update ya change karne ke liye use hota hai ;
let person ={
   fName: 'Uvesh',
   lName: 'Ahmad',
   get fullName(){                        // getter Function;
      return `${person.fName}${person.lName}`  ;
   },
   set fullName2(value){                 // Setter Function;
      let parts = value.split(' ');
      this.fName=parts[0];
      this.lName=parts[1];
   }
};
let con= 'Rahul Kumar';
console.log(person.fullName);
console.log(person.fullName2);

 
 //  try and catch - Error handling

 
 
