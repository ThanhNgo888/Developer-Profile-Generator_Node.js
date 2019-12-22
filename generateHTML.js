const fs = require('fs');
const util = require('util');
const ejs = require('ejs');

const readFilePromise = util.promisify(fs.readFile);
const writeFilePromise = util.promisify(fs.writeFile);

const generateFileName = function(){
    //get current time
    return `./_${(new Date).getTime()}.html`;
}

const easy = async function(username, color){
    //console.log(username, color);
    //constructing html string
    const htmlString =`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>${username}</title>
        </head>
        <body>
            <h1>Hello, my name is ${username}. My favorite color is ${color}</h1>
        </body>
        </html>`;

    await writeFilePromise(generateFileName(), htmlString);
}

const medium = async function(username, data){
    const template = await readFilePromise("./template.ejs", "utf-8");
    //console.log(template);
    //console.log(username, data);
    const htmlString = ejs.render(template, {
        //username: username => is as same as easy because its key and value has the name
        username, 
        data
    });
    //console.log(htmlString);
    await writeFilePromise(generateFileName(), htmlString);
}
module.exports = {
    //easy: easy => is as same as easy because its key and value has the name
    easy,
    medium
}
