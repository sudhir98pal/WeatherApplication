const request=require('request');

const { url } = require('inspector');

const { timeStamp } = require('console');

const AccessKeyOfWeatherStack='52ea8820847be1b92f7056b7d14bd3fb';

const AccessKeyOfMapBox='pk.eyJ1Ijoic3VkaGlycGFsIiwiYSI6ImNrZGZpeThwejE0Y3EyenFxenpueGw0MmkifQ.bkanyFLf14rcnN4KQyy_fA';

const MapBoxHttp='https://api.mapbox.com/geocoding/v5/mapbox.places/';

const WeatherStackHttp='http://api.weatherstack.com/current'

const city='jaunpur';
const limit='2';

const MapBoxUrl=MapBoxHttp+city+'.json?access_token='+AccessKeyOfMapBox+'&limit='+limit;


request({url:MapBoxUrl,json:true},(error,response)=>
{
    if(error)
    {
        console.log('Unable to connect to Mapbox Might be Internet Issue!');
         //------LOW LEVEL ERROR----------
    }
    else if( response.body.features.length === 0)
    {
        console.log('-----Can Not Find Entered Location-s Co-Ordinates !--------');
 
    }
    else{
        const temp=response.body.features[0].center;
        const WeatherStackUrl=WeatherStackHttp+'?access_key='+AccessKeyOfWeatherStack+'&query='+city+'&units=m'
        console.log(WeatherStackUrl);
         request({url:WeatherStackUrl,json:true},(error,response)=>
         {
            if(error)
            {
                console.log('----Unable To Connect To WeatherStack Might Be Internet Issue !-----');
                //------LOW LEVEL ERROR----------
            }
            else if(response.body.error)
            {
                console.log('-----Can Not Find Entered Location !--------');
            }
            else{
        const currentdata=response.body.current;
        console.log('Currently the temperature of '+city+' is -> '+currentdata.temperature+' Celcius and there is chance of precepitation of '+ currentdata.precip*10+' %');
        
        
            }
        
        
         });
        
    }


});





