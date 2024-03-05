//static array of objects
const reviewsArray=[
    {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

//select btns items

const prevBtn=document.querySelector('.btn-previous');
const nextBtn=document.querySelector('.btn-next');
const randomBtn=document.querySelector('.Surprise-btn');

//select people related items

const imgItem=document.getElementById('person-img');
const nameItem=document.getElementById('name');
const jobItem=document.getElementById('job');
const infoItem=document.getElementById('info');

//starting item
let i=0;

//load initial item
window.addEventListener('DOMContentLoaded',function(){
    showPerson(i);

});

function showPerson(person){
    const item=reviewsArray[person];
    console.log(item);

    imgItem.src=item.img;
    nameItem.innerHTML=item.name;
    jobItem.innerHTML=item.job;
    infoItem.innerHTML=item.text;

}

// show next person

nextBtn.addEventListener('click',function(){
    i++;
    if(i>=reviewsArray.length){
        i=0;
    }
    showPerson(i);
    
});

// show previous person

prevBtn.addEventListener('click',function(){
    i--;
    if(i<0){
        i=reviewsArray.length-1;
    }
    showPerson(i);
});

// show a random person

randomBtn.addEventListener('click',function(){
    let item=Math.floor(Math.random()*reviewsArray.length);
    showPerson(item);
})


