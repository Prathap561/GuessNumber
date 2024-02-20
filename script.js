'use strict';
// Secret Number
let secretNumber=Math.floor(Math.random()*20)+1;
let score=20;
let highscore=0;

//Guessing the number
document.querySelector('.check').addEventListener('click',()=>{
    let guess=Number(document.querySelector('.guess').value);

//No Input
    if(!guess){
        document.querySelector('.message').textContent='No Number....';
    }
 //Correct Guess
        else if(guess===secretNumber){
        
            document.querySelector('.message').textContent='Correct Number...';
            document.querySelector('body').style.backgroundColor='#60b347'
            document.querySelector('.number').textContent=secretNumber;
            if(score>highscore){
                document.querySelector('.highscore').textContent=score;
            }
                
            
        }
//High Guess        
        else if(guess>secretNumber){
            if(score>1){
                document.querySelector('.message').textContent='Too High...';
            score--;
            document.querySelector('.score').textContent=score;
            }
          else{
            document.querySelector('.message').textContent='You Lost The Game...';
            document.querySelector('.score').textContent=0;
          }
            
        }
//Low Guess        
        else if(guess<secretNumber){
            if(score>1){
                document.querySelector('.message').textContent='Too Low...';
                score--;
                document.querySelector('.score').textContent=score;
            }
            else{
                document.querySelector('.message').textContent='You Lost The Game...';
                document.querySelector('.score').textContent=0;
            }
           
    
        }
    
})

document.querySelector('.again').addEventListener('click',()=>{
    score=20;
    secretNumber=Math.floor(Math.random()*20)+1;
    document.querySelector('.number').textContent='?';
    document.querySelector('.message').textContent='Start guessing...';
     document.querySelector('.score').textContent=score;
     document.querySelector('.guess').value=' ';
    document.querySelector('body').style.backgroundColor='#222'
                

})
