const express = require('express');
const hbs = require('hbs')


const app = express();
// statement creates a new express application for you

app.set('view engine', 'hbs');
// setting app's view engine with hbs
// view engine is case and space sensitive
// it is use to create express dynamic handlebars templates

const path = require('path');
const htmlfilepath = path.join(__dirname, '../public');



// we can also can rename views folder as below
const viewspath = path.join(__dirname, '../templates/views');
const partialspath = path.join(__dirname, '../templates/partials');


app.set('views', viewspath);
hbs.registerPartials(partialspath);

app.use(express.static(htmlfilepath));


app.get('', (req, res) => {
    res.render('index',
        {
            title: 'How s The Weather Today',
            name: 'Sudhir Pal'
        });
    // to use render here
    // use command like this PS D:\2_weather_app\web_servers> node src/app.js
    // that is come out of src :-> this makes views -> index.hbs rendering possible 
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Hi MySelf Sudhir Pal'
    })
});
app.get('/help', (req, res) => {
    res.render('help',
        {
            title: 'Welcome To Help Page',
            body: 'This Is A Weather Application You Can Search Any Valid Loactions Weather'


        })
})

app.get('/weather', (req, res) => {
    res.render('weather', {
        title: 'Weather',
        location: 'Jaunpur'
    })
})

// If Nothing Matches this Webpage is called

app.get('*',(req,res)=>
{
    res.render('404',{
        title:'404 Error',
        message:'Opps Page Not Found !'

    })
})
app.listen(3000, () => {
    console.log('server is up on port 3000');
});