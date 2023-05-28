let computerGuess;
let userGuess=[];
let audio = new Audio('./audio/click.mp3');
let userGuessUpdate =  document.getElementById("textOutput");
let userNumberUpdate =document.getElementById("inputBox");
const init =()=>{
    computerGuess=Math.floor(Math.random()*100);
  document.getElementById("newgameButton").style.display="none";
    document.getElementById("gameArea").style.display="none";
};

init();
console.log(computerGuess);

const  startGame =()=>
{
    document.getElementById("welcomeScreen").style.display="none";
    document.getElementById("gameArea").style.display="block";
}
const easyMode =()=>{
    audio.play();
    startGame();

  maxGuess = 10;
} 
const hardMode =()=>{
    audio.play();
    startGame();
     maxGuess = 5;
} 
const compareGuess =()=>{
    audio.play();
    const userNumber = Number(document.getElementById("inputBox").value);
    userGuess = [...userGuess, userNumber];
    document.getElementById("guesses").innerHTML = userGuess;

    // check The value low or high

   if(userGuess.length<maxGuess){
    if(computerGuess<userNumber){
        userGuessUpdate.innerHTML="Your Guess is High";
        userNumberUpdate.value ="";
        
        
     }
     else   if(computerGuess>userNumber){
         userGuessUpdate.innerHTML="Your Guess is Low";
         userNumberUpdate.value =""; 
        
      }
      else{
         userGuessUpdate.innerHTML="It's Correct";
         userNumberUpdate.value ="";
         startNewGame();
      }
   }
   else{
    if(computerGuess<userNumber){
        userGuessUpdate.innerHTML=`You Loose !! correct Number was ${computerGuess}`;
        userNumberUpdate.value ="";
        startNewGame();
     }
     else   if(computerGuess>userNumber){
        userGuessUpdate.innerHTML=`You Loose !! correct Number was ${computerGuess}`;
         userNumberUpdate.value =""; 
         startNewGame();
      }
      else{
         userGuessUpdate.innerHTML="It's Correct , You Win";
         userNumberUpdate.value ="";
         startNewGame();
      }

   }

     document.getElementById("attempts").innerHTML = userGuess.length;

}

const startNewGame = ()=>{
    audio.play();
    document.getElementById("newgameButton").style.display="inline";
userNumberUpdate.setAttribute('disabled' , true);
}

// reload the game
const newGame = ()=>{
    audio.play();

    window.location.reload();
}