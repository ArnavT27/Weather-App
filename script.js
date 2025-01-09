const humidity=document.querySelector('.f');
const speed=document.querySelector('.speed');
const cityName=document.querySelector('.city');
const inputcity=document.querySelector('.input');
const temp=document.querySelector('.celcius');
const searchButton=document.querySelector('.searchbtn');
const mainArea=document.querySelector('.main');
const weatherSection=document.querySelector('.weather');
const image=document.querySelector('.img');
function removingHidden(){
        mainArea.classList.remove('hidden');
        weatherSection.style.height=`500px`;
    }
searchButton.addEventListener('click',function(){
    if(inputcity.value=='' || inputcity.value==null || inputcity.value==undefined){
        alert('Enter city name ');
    }
    else{
        checkWeather(inputcity.value);
    }
})
inputcity.addEventListener('keypress',function(e){
    if(e.key=='Enter'){
        checkWeather(inputcity.value);
    }
})
function changingImage(str){
    
    image.src=`${str[0].toLowerCase()+str.slice(1)}.png`;
}
async function checkWeather(c){
    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${c}&appid=194c1c4cd79bb1b7b29552ab7ab4fab2&units=metric`);
    if(!response.ok){
        alert('City not found');
        return;
    }
    const data=await response.json();
    changingImage(data.weather[0].main);
    humidity.innerHTML=data.main.humidity+' %';
    temp.innerHTML=Math.round(data.main.temp)+'℃';
    cityName.innerHTML=data.name;
    speed.innerHTML=data.wind.speed+' km/h';
    console.log(data);
    removingHidden();
}
