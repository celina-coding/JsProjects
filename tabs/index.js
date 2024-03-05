const btns=document.querySelectorAll('.btn');
const about=document.querySelector('.section-center');
const content=document.querySelectorAll('.content');

about.addEventListener('click',function(e){
    const id=e.target.dataset.id;
    //remove the active btn then add the active form to btn we clicked on
    if (id){
        btns.forEach(function(btn){
            btn.classList.remove('active');
            e.target.classList.add('active');
    });
    //remove the content 
    content.forEach(function(content){
        content.classList.remove('active');
    });
    //add the content of the btn whicth is clicked
    const element = document.getElementById(id);
    console.log(element);
    element.classList.add('active');
    }
   
})

// another solution 

// btns.forEach(function(btn){
//     btn.addEventListener('click',function(e){
//         // console.log(e.currentTarget.dataset.id);
//         const id=e.currentTarget.dataset.id;
//         console.log(id);
//         //remove the active form to the btn then add it to the current btn which we clicked on 
//         btn.classList.remove('active');
//         e.currentTarget.classList.add('active');
//         // remove the content 
//         content.forEach(function(content){
//            content.classList.remove('active');
//         });
//         //add the content 
//         const element = document.getElementById(id);
//         console.log(element);
//         element.classList.add('active');

//     })

// })

