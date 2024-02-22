

for(let i=1; i<=100; i++){

  let content = i ;


  if(i%3===0){

    content='Fizz';

    
    
  }if(i%5===0){

    content='Buzz';

    

  }if(i%3===0 && i%5===0){

    content='FizzBuzz'


  }

   
  console.log(content);
  



}