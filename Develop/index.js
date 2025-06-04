import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// Array of question objects for Inquirer
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the project title?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How does someone install your project?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How is the project used?',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Any contribution guidelines?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'How does someone run tests for your project?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license:',
    choices: ['MIT', 'Apache 2.0', 'GPL v3', 'BSD 3-Clause', 'None'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
];

// Write the populated markdown to a file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
  console.log('Successfully created README.md');
}

// Initialize the application
function init() {
  inquirer.prompt(questions).then((answers) => {
    const markdownContent = generateMarkdown(answers);
    writeToFile('README.md', markdownContent);
  });
}

// Start the application
init();
