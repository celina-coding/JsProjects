const score={
    wins:0,
    ties:0,
    losses:0

}

updateScore();
let isAutoPlaying=false;
let intervalId;

function autoPlay(){
    if(!isAutoPlaying){
       intervalId= setInterval(function(){
            const playerMove=PickComputerMove();
            playGame(playerMove);
    
        },1000);
        isAutoPlaying=true;
    }else{
        clearInterval(intervalId);

    }
    
    
}


function playGame(playerMove){
    let result='';
    const computerMove=PickComputerMove();
    if(playerMove==='Rock'){
        if(computerMove==='Rock'){
            result='tie';
            score.ties+=1
        }else if(computerMove==='Paper'){
            result='you lose';
            score.losses+=1;

        }else{
            result='you win';
            score.wins+=1;
        }

    }else if(playerMove==='Paper'){
        if(computerMove==='Rock'){
            result='you win';
            score.wins+=1;
        }else if(computerMove==='Paper'){
            result='tie';
            score.ties+=1;
        }else{
            result='you lose';
            score.losses+=1;
        }

    }else if(playerMove==='Scissors'){
        if(computerMove==='Rock'){
            result='you lose';
            score.losses+=1;
        
        }else if(computerMove==='Paper'){
            result='you win';
            score.wins+=1;
        }else{
            result='tie';
            score.ties+=1;
        }
    }

    //localStorage.setItem('score', JSON.stringify(score));
    document.querySelector('.js-result').innerHTML=`${result}`;
    document.querySelector('.js-moves').innerHTML=`You ${playerMove} - ${computerMove} Computer`;
    updateScore();
    
    
}



   



function updateScore(){
document.querySelector('.js-score').innerHTML=`wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`;
}



const randomNumber=Math.floor(Math.random()*3);
let computerMove='';
function PickComputerMove(){
    if(randomNumber==1){
        computerMove='Paper';
    }else if(randomNumber==0){
        computerMove='Rock';
    }else{
        computerMove='Scissors';
    }
    return computerMove;
}


