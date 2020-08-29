
const request=require('request');

const AccessKeyOfMapBox='pk.eyJ1Ijoic3VkaGlycGFsIiwiYSI6ImNrZGZpeThwejE0Y3EyenFxenpueGw0MmkifQ.bkanyFLf14rcnN4KQyy_fA';

const MapBoxHttp='https://api.mapbox.com/geocoding/v5/mapbox.places/';

const limit='1';

const geocoding=(addresh ,callback)=>
{
    //encodeURIComponent is used to Avoid crash like addresh=('?' or other special characters)
    // ? beacomes %3F after encoding

const MapBoxUrl=MapBoxHttp+encodeURIComponent(addresh)+'.json?access_token='+AccessKeyOfMapBox+'&limit='+limit;
// json(in small) is true to set parse data in json 

request({url:MapBoxUrl,json:true},(error,{body}={})=>
{
    // By object destructuring maked respose.body to body
    if(error)
    {
       
        //------LOW LEVEL ERROR----------
        callback(' Unable To Connect To Internet ! ',undefined);
    }
    else{

if(body.features.length==0)
{
    callback(' Can Not Find Entered Location !',undefined);
}
else
{

 // object destructured
 // from body.features to features
    const {features}=body

callback(undefined,{

   
    latitude:features[0].center[0],
    longitude:features[0].center[1],
    location:features[0].place_name
});

}




    }
})

}


module.exports=geocoding;