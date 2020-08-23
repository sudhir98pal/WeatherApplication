const express = require('express');

const app = express();
// statement creates a new express application for you

app.set('view engine','hbs');
// setting app's view engine with hbs
// view engine is case and space sensitive
// it is use to create express dynamic handlebars templates

const path = require('path');
const htmlfilepath = path.join(__dirname, '../public');

app.use(express.static(htmlfilepath));


app.get('',(req,res)=>
{
    res.render('index',
    {
        title:'Weather App',
        name:'Sudhir Pal'
    });
    // to use render here
    // use command like this PS D:\2_weather_app\web_servers> node src/app.js
    // that is come out of src :-> this makes views -> index.hbs rendering possible 
})

 
app.get('/weather', (req, res) => 
{
    rapp.use(express.static(htmlfilepath));
})

app.listen(3000, () => {
    console.log('server is up on port 3000');
});