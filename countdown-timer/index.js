const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

const giveaway=document.querySelector('.giveaway');
const deadlineformat=document.querySelectorAll('.deadline-format h4');
const deadline=document.querySelector('.deadline');
console.log(deadlineformat);

let tempDate=new Date();
let tempDays=tempDate.getDate();
let tempYear=tempDate.getFullYear();
let tempMonth=tempDate.getMonth();

let futureDate=new Date(tempYear,tempMonth,tempDays+10,11,30,0);
// console.log(futureDate);
let year=futureDate.getFullYear();
let month=futureDate.getMonth();
month=months[month];
let date=futureDate.getDate();
let day=futureDate.getDay()
day=weekdays[day];
let hours =futureDate.getHours();
console.log(hours);
let mins=futureDate.getMinutes();


giveaway.innerHTML=`Giveaway Ends On ${day}, ${date} ${month} ${year} ${hours}:${mins}am `;

//calculate the future time in millisec
const futureTime=futureDate.getTime();
//create a func which calculates the remaining time for the giveaway
function getRemainingTime(){
  const currentDay= new Date().getTime();
  // console.log(currentDay);
  const t= futureTime - currentDay;
  // console.log(t);

  //1s->1000ms
  //1min->60s
  //1h->60min
  //1day->24h

  const oneDay=24*60*60*1000;
  const oneHour=60*60*1000;
  const oneMin=60*1000;
  const oneSec=1000;
  // console.log(oneDay);
  let daysLeft=t/oneDay;
  // console.log(daysLeft);
  daysLeft=Math.floor(daysLeft);
  // console.log(`daysleft: ${daysLeft}`);
  let hoursLeft=(t%oneDay)/oneHour;
  hoursLeft=Math.floor(hoursLeft);
  // console.log(hoursLeft);
  let minsLeft=Math.floor((t%oneHour)/oneMin);
  // console.log(minsLeft)
  let secsLeft=Math.floor((t%oneMin)/oneSec);
  // console.log(secsLeft);

  //set values array
  const values=[daysLeft,hoursLeft,minsLeft,secsLeft];
  //adding the 0 for the values which are <10
  function format(item){
    if(item<10){
      return (item=`0${item}`);
    }else{
      return item;
    }
  }
  deadlineformat.forEach(function(item,value){
    item.innerHTML=format(values[value]);
  });
  if(t<0){
    clearInterval(countDown);
    deadline.innerHTML=`<h4>Sorry,this giveaway has expired</h4>`
  }
}
//set the interval
let countDown=setInterval(getRemainingTime,1000);
getRemainingTime();