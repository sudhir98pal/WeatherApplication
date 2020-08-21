

const chalk=require('chalk')

const geocoding=require('./util/geocoding')
console.log(chalk.bold.bgMagenta.underline('   WEATHER APPLICATION    '))


// It Is Not Always Require to Give Data type In Path Like this -> (./util/geocoding.js)
// Same For Below

const forcast=require('./util/forcast')




const Addresh=process.argv[2]
// Taking Addresh From Command Line
// argv[0] =>Addresh where node is installed 
// argv[1] =>Addresh where Project is located

if(!Addresh)
{
    console.log(chalk.bold.underline.redBright('Please Provide Addresh To Search its Weather!'))
    return;
}

geocoding(Addresh,(error,data)=>
{
    if(error)
    {
        console.log(chalk.bgRed.underline.bold(error));
        return ;
    }
     

    console.log(chalk.bold.magenta.underline(data.location+' Has '))
    console.log(chalk.bold.green.underline('   CO-ORDINATES  '))
    console.log(chalk.bold.yellow('Latitude : ')+chalk.blue(data.latitude));
    console.log(chalk.bold.yellow('Longitude : ')+chalk.white(data.longitude));


   
       forcast(data.latitude,data.longitude,(error,forcastData)=>
       {
           if(error)
           {
               console.log(error);
               return ;
           }
           console.log(chalk.bold.green.underline('   Climate  '))
    console.log(chalk.cyanBright('Temperature : ')+chalk.bold.greenBright(forcastData.temperature))
    console.log(chalk.blueBright('Time : ')+chalk.bold.whiteBright(forcastData.time))
    console.log(chalk.yellowBright('Precipitaion Chance : ')+chalk.bold.cyanBright(forcastData.precipitation*10+' %'))
    console.log(chalk.blueBright('Wind Direction : ')+chalk.bold.whiteBright(forcastData.wind_direction))
    
    

           
       })
       
})
    

