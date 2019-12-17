//require dependency, inquirer
const inquirer = require("inquirer");
//require the file
const { easy, medium } = require("./generateHTML");//doesn't need js extension

//create a getUserInput function
function getUserInput(){
   //return the promise
    return inquirer.prompt([
        {
            type: "input",
            message: "Please input your github username",
            name: 'username',
        },
        {
            type: "list",
            message: "Please choose your favorite color",
            name: "color",
            choices: [
                {
                    name: "Red",
                    value: 'red'
                },
                {
                    name: "Blue",
                    value: 'blue'
                },
                
            ]
        }
        
    ])
}

//create an main function to run everything
async function main(){
    // const response = await getUserInput();
    // console.log(response);
    const { username, color } = await getUserInput();
    //console.log(username, color);
    //easy(username, color);
    medium(username, color);
}
//calling a main function
main();
//==============================================================================================================
