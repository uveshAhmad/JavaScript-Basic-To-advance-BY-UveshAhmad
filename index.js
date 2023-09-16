document.addEventListener('click' , function(){  // ye vala fun alag h memory me 
    console.log("I have done it ");
});
document.removeEventListener('click' , function(){  //ye vala fun  alag hai memory me 
    console.log("I have done it");
});
//remove karne ke liye fun k alag object bna kar use dononme reffer karna haoga ;

function touchMe(){
    console.log("Uvesh bhai");
}
document.addEventListener('click' ,touchMe()
);

