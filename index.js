import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from './utils/generateMarkdown.js';

const questions = [
    'What is the title of this application?', 'Please input the description for your application.', 'Please input installation instructions.',
    'Please input usage information.', 'Please input contribution guidlines.', 'Please input test instructions.', 'Select a licence', 'Enter your GitHub username',
    'Enter your email address.'
];

function inquire() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: questions[0],
        },
        {
            type: 'input',
            name: 'description',
            message: questions[1],
        },
        {
            type: 'input',
            name: 'installation',
            message: questions[2],
        },
        {
            type: 'input',
            name: 'usage',
            message: questions[3],
        },
        {
            type: 'input',
            name: 'contribution',
            message: questions[4],
        },
        {
            type: 'input',
            name: 'test',
            message: questions[5],
        },
        {
            type: 'list',
            name: 'license',
            choices: [
                'Apache License 2.0', 'GNU General Public License 3.0', 'MIT License', 'BSD 2-Clause License', 'BSD 3-Clause License', 'Creative Commons Zero 1.0 Universal License',
                'Eclipse Public License', 'Mozilla Public License 2.0'
            ],
            message: questions[6],
        },
        {
            type: 'input',
            name: 'github',
            message: questions[7],
        },
        {
            type: 'input',
            name: 'email',
            message: questions[8],
        },
    ])
    .then((answers) => {
        const readMeContent = generateMarkdown(answers);
        fs.writeFile('README.md', readMeContent, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md!')
        );
    });
}

function init() {
  console.log('Welcome to README generator!');
  inquire();
}

init();
