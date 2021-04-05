// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const readMeTemplate = (answers) => 
`# ${answers.title}
<a name="description"></a>
## Description
${answers.description}
## Table of Contents

1. [Description] (#description)
2. [Installation] (#installation)
3. [Usage] (#usage)
4. [License] (#license)
5. [Contributing] (#contributing)
6. [Tests] (#tests)
7. [Questions] (#questions)

<a name="installation"></a>
## Installation
***
${answers.installation}

<a name="usage"></a>
## Usage
***
${answers.usage}

<a name="license"></a>
## License
***
${answers.license}

<a name="constributing"></a>
## Contributing
***
${answers.contributing}

<a name="tests"></a>
## Tests
***
${answers.tests}

<a name="questions"></a>
## Questions
***
https://github.com/${answers.github}
If you have further questions, suggestions, or business inquiries please contact me via email: mailto:${answers.email}
`;
// TODO: Create an array of questions for user input
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
    name: 'tests',
    message: 'What tests do you recommend to the user?',
},
 {
     type: 'list',
     name: 'license',
     choices: ["MIT", "GPLv2", "Apache", "LGPLv3", "Unlicensed"],
     message: 'What is your application licensed under?',
 },
 {
     type: 'input',
     name: 'usage',
     message: 'Is there any important usage information the user should know?',
 },
 {
     type: 'input',
     name: 'constributing',
     message: 'Are there any other contibutors, if so list them, if not hit enter?',
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


const writeToFile = util.promisify(fs.writeFile);

async function init() {
    try {
        const answers = await inquirer.prompt(questions);
        const template = readMeTemplate(answers);
        writeToFile('ReadME.md', template);
    } catch (err) {
        console.log(err);
    }
    
}

init();