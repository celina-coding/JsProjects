const hexColorsArray=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const btn = document.querySelector('.js-btn-click');
const color=document.querySelector('.color');

btn.addEventListener('click',function(){
    let hexColor="#";
    for(let i=0;i<6;i++){
        hexColor+=hexColorsArray[getRandomNum()];
    }
    color.innerHTML=hexColor;
    document.body.style.backgroundColor=hexColor

});

function getRandomNum(){
    return Math.floor(Math.random()*hexColorsArray.length);
}
