
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

module.exports = readMeTemplate;