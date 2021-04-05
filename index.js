const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');


const readMeTemplate = (answers, badgeLink) => 
`# ${answers.title}

${badgeLink}
<a name="description"></a>
## Description
${answers.description}
## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)


## Installation
***
${answers.installation}


## Usage
***
${answers.usage}


## License
***
${answers.license}


## Contributing
***
${answers.contributing}


## Tests
***
${answers.tests}


## Questions
***
https://github.com/${answers.github}
If you have further questions, suggestions, or business inquiries please contact me via email: mailto:${answers.email}
`;
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
const badge = (license) => {
    switch(license) {
        case "MIT":
         link = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
            break;
        case "GPLv2":
            link = "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
            break;
        case "Apache":
            link = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
            break;
        case "LGPLv3":
            link = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
            break;
        case "Unlicensed":
            link = "";
            break;   
        }

    return link;
    };

const writeToFile = util.promisify(fs.writeFile);

async function init() {
    try {
        const answers = await inquirer.prompt(questions);
        const badgeLink = badge(answers.license);
        const template = readMeTemplate(answers, badgeLink);
        writeToFile('ReadME.md', template);
    } catch (err) {
        console.log(err);
    } 
};

init();