// ________TRYING HTTP REQUEST WITHOUT LIBRARY___________
const http=require('http');
const city='nagpur'
const url='http://api.mapbox.com/geocoding/v5/mapbox.places/'+city+'.json?access_token=pk.eyJ1Ijoic3VkaGlycGFsIiwiYSI6ImNrZGZpeThwejE0Y3EyenFxenpueGw0MmkifQ.bkanyFLf14rcnN4KQyy_fA&limit=1';

const request=http.request(url,(response)=>
{
    let data='';
    response.on('data',(d)=>
    {
        data=data+d.toString();

    })
   

    response.on('end',()=>
    {
        const body=JSON.parse(data);
        console.log(body);
    })

    response.on('error',(error)=>
    {
        console.log('An error:'+error)
    })

})

request.end();