const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const questions = require('./questions');
const readMeTemplate = require('./readMeTemplate');
const badge = require('./badge');




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