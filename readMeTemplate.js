
const readMeTemplate = (answers, badgeLink) => 
`# ${answers.title}


${badgeLink}


## Description
${answers.description}
## Table of Contents


* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Tests](#tests)
* [Contributing](#contributing)
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


## Tests
***
${answers.tests}


## Contributing
***
${answers.contributing}


## Questions
***
https://github.com/${answers.github}
If you have further questions, suggestions, or business inquiries please contact me via email: mailto:${answers.email}
`;

module.exports = readMeTemplate;