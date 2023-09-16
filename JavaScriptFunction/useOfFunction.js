 // adding 100 para
 const t1 = performance.now();
for(let i=1 ; i<=100; i++){
   let newElement = document.createElement('p');
   newElement.textContent='This is para' +i;
     document.body.appendChild(newElement);
     // direct body me add kr diya   hai yha 
 }
  const t2 = performance.now();
  console.log(" This took " (t2-t1)+"ms ");


 // optimising a bit 
 const t3 = performance.now();
 let myDiv = document.createElement('div');
 for(i=1; i<=100; i++){
    let elemnt= document.createElement('p');
    elemnt.textContent='This is para '+ i;
    myDiv.appendChild(elemnt); // Reflow=100 Repaint = 100
  // pehle div me dala fir baad me neeche body me add kara hai 
 }
 document.body.appendChild(myDiv);
 const t4 = performance.now();
 console.log(" This took " (t4-t3)+"ms ");
 // yaha add kiya hai body me basic wale mai direct body me add kiya gya tha 




// Document fragmantettion good Practice 
 let frag = document.createDocumentFragment();
for(let i=1 ; i<=100; i++){
   let newElement = document.createElement('p');
   newElement.textContent='This is para' +i;
    frag.appendChild('p'); //Reflow =0 ; repaint=0;
    // 
}
document.body.appendChild(frag);





 // Single threading 
  function addPara(){
     let para = document.createElement('p');
     para.textContent = 'JS is Single threading';
     document.body.appendChild(para);

  }

  function appendNewMeassage(){
    let para = document.createElement('p');
    para.createElement = 'Kya haal chaal';
    document.body.appendChild(para);
  }
 addPara();
 appendNewMeassage();
 // Ye dono function one by one execute honge na ki ek hi same yime par



 /// Call stack

 //             ( same as java Stack)
 //              ek list hoti hai jisme function call store karte hai ;


 //




 // Event Loop
 





 // setTime();   console me chalakar Dekho mere bhai
 setTimeout(function(){console.log("Hello");},4000);



 // Asynchronos Code 

 setTimeout(function(){
   console.log('Third');
 } , 4000);
 function sync(){
   console.log("First");
 }
  
 sync();
 console.log("second ");





 // Prpomise function
 let meraPromise= new PromiseRejectionEvent(function (resolve , reject ){
    setTimeout(function(){
      console.log("i amm inside promise ");
    } , 5000);
    resolve(2233        // ye baad me ayega
                                // console me merapromise rakhne par fullfilled dikhayega or ve value return kr dega 
                                // hamne ise explicitly acccept kara hai  yaani fullfilled hua hai console me reject nhi

      // reject ke liye code 
      //reject(new Error ('Bhaisahab error aaye hai '));
      );
    });
console.log("Pehla");  // pehle ye print hoga ;


// Then(); catch();











// Multiple Promise 

 
 









// Async await 
  async function abcd(){    //starting me lgaega keyword
       return 7;
   }
   console.log(abcd());  // fun call  ye return krega promise
                                    // promise  me 7 value hogi or fulfilled hoga
                                    // agar koi string hoti vo bhi aise hi return karta ye

async function utility(){



 let  DelhiMausam = new Promise( (resolve , reject) =>{
   setTimeout(()=>{
      resolve("Delhi me baut garmi hai ");
   }, 1000);
   });

   let HyderaMausam = new Promise((resolve , reject)=>{
      setTimeout(()=>{
         resolve("Hyderabad is cool.");
      },5000);
      });
                
   // kya ye dono parallay chl rahe hai ya ek ke baad ek 
   //  bhayya ye paralally hi chl rhe hai abhi tak
   //   let dM= delhiMausam;
   //   let hM=HyderaMausam;
   //   return [dM , hM];


     // but ab ye  ek ke baad ek chakenge await keyword ka use krne ke baad
     let dM= await delhiMausam;  // line 176 execute nahi hogi jb tk 175 execute nahi hon jaye 
     let hM= await HyderaMausam;
     return [dM , hM];


   }                        




    

