// Fetch API 

// for get API 

async function utility(){
    let content = await fetch('https://jsonplaceholder.typicode.com/post/1');
    let output = await content.json();
    console.log(output);
   }
   utility();
   

   // for POST API 
    async function helper(){
   let option={
    method : 'POST',
    body: JSON.stringify({
        title : 'foo',
        body: 'bar',
        uderID:1,

    }),
    headers: {
        'content-type': 'application/json; charset=UTF-8',
    },
    };
   
    let content = await fetch('https://jsonplaceholder.typicode.com/post' , option);
    let response = content.json();
    return response;
}
 
 