const express = require('express');

const app = express();
// statement creates a new express application for you

const path = require('path');
const htmlfilepath = path.join(__dirname, '../public');

app.use(express.static(htmlfilepath));

 
app.get('/weather', (req, res) => 
{
    rapp.use(express.static(htmlfilepath));
})

app.listen(3000, () => {
    console.log('server is up on port 3000');
});