const randomNum = Math.floor(Math.random() * 100) + 1;



function guessNum(){
  
  const guess = document.getElementById('guess-input');
  const guessValue = parseInt(guess.value);

  attempts(guessValue);


  if(guessValue < 1 || guessValue > 100){
    document.querySelector('#high-or-low').innerHTML = 'Please enter a valid number';
  
  } else if(guessValue === randomNum){
    document.querySelector('#high-or-low').innerHTML = 'You Guessed it!';
 
  } else if (guessValue > randomNum) {
     document.querySelector('#high-or-low').innerHTML = 'Guess Lower'  
    
  } else if ( guessValue < randomNum){
      document.querySelector('#high-or-low').innerHTML = 'Guess Higher'
    }

 }
 let i = 1;

function attempts(guessValue){
  if(isNaN(guessValue)){
  document.getElementById('tries-left').innerHTML = `Please Enter a number`; 
  } else {
    document.getElementById('tries-left').innerHTML = `${i} attempts`; 
    i++;
  } 
 }
  


