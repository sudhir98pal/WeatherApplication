const request=require('request');

const AccessKeyOfWeatherStack='52ea8820847be1b92f7056b7d14bd3fb';

const WeatherStackHttp='http://api.weatherstack.com/current'

const forcast=(lat,log,callback)=>{
const WeatherStackUrl=WeatherStackHttp+'?access_key='+AccessKeyOfWeatherStack+'&query='+lat+','+log+'&units=m'
console.log(WeatherStackUrl);
             request({url:WeatherStackUrl,json:true},(error,response)=>
             {
                if(error)
                {
                    callback('----Unable To Connect To WeatherStack Might Be Internet Issue !-----',undefined);
                    //------LOW LEVEL ERROR----------
                }
                else if(response.body.error)
                {
                    callback('-----Can Not Find Entered Location !--------',undefined);
                }
                else{
            const currentdata=response.body.current;
           callback(undefined,{
               temperature:currentdata.temperature
           })
            
                }
            
            
             });
            
        }


        module.exports=forcast;