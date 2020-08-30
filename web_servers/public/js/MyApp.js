

console.log('----------From client side Javascript file------')


const mlocation=document.querySelector('#location')
const mdateAndTime=document.querySelector('#dateAndTime')
const mtemperature=document.querySelector('#temperature')
const mprecipitationChance=document.querySelector('#precipitationChance');
const mlatitude=document.querySelector('#latitude');
const mlongitude=document.querySelector('#longitude');
const mwindDirection=document.querySelector('#windDirection');


const weatherInput = document.querySelector('form');
const search = document.querySelector('input');

weatherInput.addEventListener('submit', (e) => {
    e.preventDefault();
    // prevent us from refreshing browser each time
    mlongitude.textContent='';
    mtemperature.textContent='';
     mdateAndTime.textContent='';
    mprecipitationChance.textContent='';
     mwindDirection.textContent='';
     mlatitude.textContent='';
    mlocation.textContent='Searching......'
 
    const Addresh = search.value;
    console.log(Addresh);
    console.log('---testing--');
    fetch('/weather?search='+Addresh).then((response) => {


       
        response.json().then((data) => {
            if (data.error) {
                mlocation.textContent=data.error;
                mlatitude.textContent='';
mlongitude.textContent='';
mtemperature.textContent='';
 mdateAndTime.textContent='';
mprecipitationChance.textContent='';
 mwindDirection.textContent='';

            }
            else {
             
        mlatitude.textContent='Latitude: '+data.latitude;
       mlongitude.textContent='Longitude: '+data.longitude;
        mlocation.textContent='Location:  '+data.location;
      mtemperature.textContent='Temperature: '+data.temperature;
        mdateAndTime.textContent='Date and Time: '+data.time;
       mprecipitationChance.textContent='Precipitaion: '+data.precipitation;
        mwindDirection.textContent='Wind Direction: '+data.windDirection;
            }


        })
    })
})