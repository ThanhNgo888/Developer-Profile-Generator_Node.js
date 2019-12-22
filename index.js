//require dependency, inquirer
const inquirer = require("inquirer");
const axios = require('axios');

//require the file
const { easy, medium } = require("./generateHTML");//doesn't need js extension

//create a getUserInput function
function getUserInput(){
   //return the promise
    return inquirer.prompt([
        {
            type: "input",
            message: "Please input your github username",
            default: 'Thanh', 
            name: 'username',
        },
        // {
        //     type: "list",
        //     message: "Please choose your favorite color",
        //     name: "color",
        //     choices: [
        //         {
        //             name: "Red",
        //             value: 'red'
        //         },
        //         {
        //             name: "Blue",
        //             value: 'blue'
        //         },
                
        //     ]
        // }
        
    ])
}
//============================================================================================================
async function getGithubInfo(username){
    const { data } = await axios.get(`https://api.github.com/users/${username}`);
    console.log(data);
    //console.log(response);
    return data;
}

//create an main function to run everything
async function main(){
    // const response = await getUserInput();
    // console.log(response);
    const { username } = await getUserInput();
    //console.log(username, color);
    //easy(username, color);
    
    const data = await getGithubInfo(username);
    console.log(data);
    medium(username, data);
}
//calling a main function
main();
//==============================================================================================================
