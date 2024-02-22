

const Container = document.getElementById('Container');


for(let i = 1; i <= 100; i++){
  let content = i ;
  const box = document.createElement('div');
  box.className = 'box';
 
  Container.append(box);


  if(i%3===0) {

   content='Fizz';
   box.classList.add('bg-danger')

  }if(i%5===0){

    content='Buzz';
    box.classList.add('bg-info')

    

  }if(i%3===0 && i%5===0){

    content='FizzBuzz';
    box.classList.add('bg-white')


  }

  box.innerHTML = content;


}
