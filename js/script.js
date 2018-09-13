const dateRange=['Today','Yesterday','Last 7 days','Last 30 days','Last 90 days','Custom'];
const timezone=[
    "Часовой пояс UTC-12","Часовой пояс UTC-11","Часовой пояс UTC-10","Часовой пояс UTC-9","Часовой пояс UTC-8","Часовой пояс UTC-7","Часовой пояс UTC-6","Часовой пояс UTC-5","Часовой пояс UTC-4","Часовой пояс UTC-3","Часовой пояс UTC-2","Часовой пояс UTC-1","Часовой пояс UTC 0","Часовой пояс UTC+1","Часовой пояс UTC+2","Часовой пояс UTC+3","Часовой пояс UTC+4","Часовой пояс UTC+5","Часовой пояс UTC+6","Часовой пояс UTC+7","Часовой пояс UTC+8", "Часовой пояс UTC+9", "Часовой пояс UTC+10","Часовой пояс UTC+11","Часовой пояс UTC+12",];
let toggleEl=0;
const getTarget=(e)=>{
console.log(e.target);
for (var i=0;i<e.target.length;i++){
    if (e.target[i].selected){
        console.log('el=',e.target[i])
        toggleEl=e.target[i].getAttribute('data-entity');
        console.log('element=',toggleEl);
    }
}
let dates = new Date();
if (toggleEl==1){
    let days=document.getElementsByClassName('datepicker--cell');
    for (let i=0;i<days.length;i++){
        
        if(days[i].classList.contains('-current-')){
            days[i].classList.remove('-current-');
            days[i-1].classList.add('-current-');
            days[i-1].classList.add('act');


            console.log('days=',days);

        }
       
    }
}
}

const widjet = (() =>{
document.getElementById('widjet-title').innerHTML=dateRange[0];
let optionRange='';
let timezoneData='';
for(let i=0;i<dateRange.length;i++){
optionRange+=`<option data-entity="${i}">${dateRange[i]}</option>`
}
document.getElementById('date-range').innerHTML=optionRange;
for (let i=0;i<timezone.length;i++){
    timezoneData+=`<option data-entity="${i}">${timezone[i]}</option>`

}
document.getElementById('widjet-timezone').innerHTML=timezoneData;

})();



const apply = ()=>{
   
}

//<div class="datepicker--cell datepicker--cell-day -selected-" data-date="7" data-month="8" data-year="2018">7</div>