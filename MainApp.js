const request=require('request');

const { url } = require('inspector');

const { timeStamp } = require('console');

const geocoding=require('./util/geocoding')

// it is not always require to give data type in path like :./util/geocoding.js
// or ./util/forcast.js

const forcast=require('./util/forcast')











geocoding('varansi',(error,data)=>
{
    if(error)
    {
        console.log(error);
    }
    else{
        console.log(data.location);
       console.log(data.latitude);
       console.log(data.longitude);
       
    }
    
})

