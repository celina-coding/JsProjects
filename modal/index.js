const opernModalBtn=document.querySelector('.btn-modal');
const closeModalBtn=document.querySelector('.close-btn');
const modal=document.querySelector('.modal');

opernModalBtn.addEventListener('click',function(){

        modal.classList.add('show-modal');

});

closeModalBtn.addEventListener('click',function(){
    modal.classList.remove('show-modal');
})
