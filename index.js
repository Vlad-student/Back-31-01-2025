// const path = require('path');

// const pathToText = path.resolve(__dirname,'assets','text.txt') ;
// console.log(pathToText);


const fs = require('fs');
fs.readFile('./assets/text.txt', 'utf8' ,(error, data)=>{
    if (error) {
        console.log(error);
        return;
    }
    console.log(data);
});





 