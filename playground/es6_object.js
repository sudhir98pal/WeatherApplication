// // --------OBJECT PROPERTY SHORTHAND------

const { underline } = require("chalk");

// const name='Sudhir'
// const age=22
// const location='Mumbai'
// // SEE BOTH ARE GIVING SAME RESULT
// // ACTUALLY WE NEED NOT TO ASSIGN VARIABLE IF VARIABLE AND ITS VALUE ARE SAME AS BELOW 
// const user={
//     name:name,
//     age:age,
//     location:location
// }

// console.log(user);

// const user2={
//     name,
//     age,
//     location
// }

// console.log(user2);

//----OBJECT DESTRUCTURING-----


const product=
{
    price:125,
    stock:10,
    label:'patanjali chaunprash',
    company:'patanjali',
    saleprice:undefined,
    //qaulity:'sss'
}

// const price=product.price
// const stock=product.stock
// the above variable assigning can be done as below

// const{price,stock}=prodcut;
// console.log(price);
// console.log(stock);
// Also we can relabel it
//const{price:pricess,stock:stockss}=product;
//console.log(pricess);
//console.log(stockss);
// Also can define new variable like quality
// only if product do not have quality variable else quality will use products quality value
// const{price:pricess,stock:stockss,qaulity='vergood'}=prodcut;
// console.log(qaulity);
// console.log(pricess);


//  -------OBJECT DESTRUCTURING IN FUNCTION---------


const sell=(numbers_of_Product,{price,company})=>
{

    console.log('Selling products');
    console.log('its Price '+price);
    console.log('its company is '+company)
}

sell(25,product)
