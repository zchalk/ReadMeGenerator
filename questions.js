const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project called?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is a good description of your project?',
    },
    {
       type: 'input',
       name: 'installation',
       message: 'What should the user know about installation?',
   },
   {
    type: 'input',
    name: 'usage',
    message: 'Is there any important usage information the user should know?',
    },
    {
        type: 'list',
        name: 'license',
        choices: ["MIT", "GPLv2", "Apache", "LGPLv3", "Unlicensed"],
        message: 'What is your application licensed under?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What tests do you recommend to the user?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to your project?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },   
   ];

module.exports = questions;