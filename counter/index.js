
let count=0;

const score=document.querySelector('#js-score');
// const btndecrease=document.querySelector('.js-btn-decrease');
// const btnIncrease=document.querySelector('.js-btn-increase');
// const btnReset=document.querySelector('.js-btn-reset btn');

//I used forEach loop to make my code shorter
const btns=document.querySelectorAll('.btn');

btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const event=e.currentTarget.classList;
        if(event.contains('js-btn-decrease')){
           count--;
        }else if(event.contains('js-btn-reset')){
           count=0;
        }else{
            count++;
        }
        color();
        score.innerHTML=count;
        
    })

})

function color(){
    if(count<0){
        score.style.color='red';
    }else if(count>0){
        score.style.color='green';
    }else{
        score.style.color='black';
    }
}

//we can use these lines of code 
// btndecrease.addEventListener('click',function(){
//     count--;
//     score.textContent=count;
//     console.log(count);

// });



