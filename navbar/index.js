const btn=document.querySelector('.toggle-btn');
const links=document.querySelector('.nav-links');

btn.addEventListener('click',function(){
    if(links.classList.contains('show-nav-links')){
        links.classList.remove('show-nav-links');
    }else{
        links.classList.add('show-nav-links');
    }
})
