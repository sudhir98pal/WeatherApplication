const express=require('express');
const app=express();
const chalk=require('chalk');
// statement creates a new express application for you


app.get('',(req,res)=>
{

    res.send('Hello Sudhir from Express')
})

app.get('/help',(req,res)=>
{
    res.send('Welcome to help Page Sudhir Pal');
})

app.get('/about',(req,res)=>
{
    res.send(('Hello your are on about page'));

})

app.get('/about',(req,res)=>
{
    res.send(('Hello your are on about page'));

})

app.get('/weather',(req,res)=>
{
    res.send('your weather is .....')
})

app.listen(3000,()=>
{
    console.log('server is up on port 3000');
});