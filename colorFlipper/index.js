const colorsArray=["green","red","blue","rgb(133,29,35)","#1F589F"];
const btn = document.querySelector('.js-btn-click');
const color=document.querySelector('.color');

btn.addEventListener('click',function(){

    const randomNumber=Math.floor(Math.random()*colorsArray.length);

    document.body.style.backgroundColor=colorsArray[randomNumber];
    color.innerHTML=colorsArray[randomNumber];

});
