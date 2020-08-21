const request=require('request');

const AccessKeyOfWeatherStack='52ea8820847be1b92f7056b7d14bd3fb';

const WeatherStackHttp='http://api.weatherstack.com/current'

const forcast=(lat,log,callback)=>{
const WeatherStackUrl=WeatherStackHttp+'?access_key='+AccessKeyOfWeatherStack+'&query='+log+','+lat+'&units=m'


// USING OBJECT DESTRUCTURING
//request({url:WeatherStackUrl,json:true},(error,response)
// ON RESPONSE AS BELOW
             request({url:WeatherStackUrl,json:true},(error,{body})=>
             {
                  // after object destructuring response.body changes to {body}
                if(error)
                {
                    callback('----Unable To Connect To WeatherStack Might Be Internet Issue !-----',undefined);
                    //------LOW LEVEL ERROR----------
                }
                else if(body.error)
                {
                   
                    callback('-----Can Not Find Entered Location !--------',undefined);
                }
                else{
            const currentdata=body.current;
           callback(undefined,{
               temperature:currentdata.temperature,
               time:body.location.localtime,
               pressure:currentdata.pressure,
               precipitation:currentdata.precip,
               wind_direction:currentdata.wind_dir


           })
            
                }
            
            
             });
            
        }


module.exports=forcast;