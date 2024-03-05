const toggleBtn=document.querySelector('.nav-toggle');
const navLinks=document.querySelector('.nav-links');
const links=document.querySelector('.links');
const date=document.querySelector('#date');

// set date
date.innerHTML=new Date().getFullYear();

//we can use this following solution 

// toggleBtn.addEventListener('click',function(){
//     if(navLinks.classList.contains('show-links')){
//         navLinks.classList.remove('show-links');
//     }else{
//         navLinks.classList.add('show-links');
//     }
// })

//but this one is mutch better cause we are setting the links height dynamically so that it won't cause us any problem if the links were dynamically added

toggleBtn.addEventListener('click',function(){
    const navLinksHeight=navLinks.getBoundingClientRect().height;
    const linksHeight=links.getBoundingClientRect().height;

    if(navLinksHeight===0){
        navLinks.style.height=`${linksHeight}px`;
    }else{
        navLinks.style.height=0;
    }
});

//show the fixed nav 

const navbar=document.querySelector('#nav');
const topLink=document.querySelector('.top-link');

window.addEventListener('scroll',function(){
    const navbarHeight=navbar.getBoundingClientRect().height;
    const scrollHeight=window.pageYOffset;
    // console.log(scrollHeight);
    if(scrollHeight>navbarHeight){
        navbar.classList.add('fixed-nav');
    }else{
        navbar.classList.remove('fixed-nav');
    }
    //show the top link btn
    if(scrollHeight>=500){
        topLink.classList.add('show-top-link');
    }else{
        topLink.classList.remove('show-top-link');
    }
})

//smooth scroll
//select scroll links
const scrollLinks=document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function(link){
    link.addEventListener('click',function(e){
        //prevent default
        e.preventDefault();
        let id = e.currentTarget.getAttribute('href').slice(1);
        console.log(id);
        const element = document.getElementById(id);
        //we can not use slice methode so that we can use document.querySelector 
        let position = element.offsetTop;
        const navLinksHeight=navLinks.getBoundingClientRect().height;
        console.log(position);
        window.scrollTo({
            left: 0,
            top:position-navLinksHeight,
        });
        navLinks.style.height=0;



    })

})




