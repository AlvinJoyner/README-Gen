// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        //Name of Projet
        type: 'input',
        name: 'title',
        message: 'What is the name of your project.',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('nah bro you need a name!');
                return false;
            }
        }
    },
    {
        //Linking your GitHub profile  
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Profile Name.',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('I need dat username!')
                return false;
            }
        }
    },
    {
        // User  Github Repo
        type: 'input',
        name: 'repo',
        message: 'Gimme the name of your GitHub Repo.',
        validate: repoInput => {
            if (repoInput) {
                return true;
            } else {
                console.log('Come on now , You need Your  Repo name')
            }
        }
    },
    {
        // The description of Repo 
        type: 'input',
        name: 'description',
        message: 'Tell me about the project that took you so long',
        validate: descInput => {
            if (descInput) {
                return true;
            } else {
                console.log('Just a few words bro ')
                return false;
            }
        }
    },
    {
        //How your project will look ion the UI
        type: 'input',
        name: 'useage',
        message: 'Tell me how i would use this my guy ',
        validate: useageInput => {
            if (useageInput) {
                return true;
            } else {
                console.log('Add some more info so it looks complete')
                return false;
            }
        }
    },
    {
        // link their GitHub hosted site
        type: 'input',
        name: 'link',
        message: 'Lets put that link for the repo',

        validate: linkInput => {
            if (linkInput) {
                return true;
            } else {
                console.log(' I need dat link please!');
                return false;
            }
        }
    },
    {
        
        type: 'input',
        name: 'installation',
        message: 'List all your packages you used',
       
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Tell me more!');
                return false;
            }
        }
    },
    {
        
        type: 'list',
        name: 'license',
        message: 'Just tell me what liscence and hurry up',
        choices: ['MIT', 'GNU', 'Apache 2.0', 'ISC'],
        default: 0,
        
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log(' *sigh* Liscence and Reg Please...');
                return false;
            }
        }
    },
    {
        //what other elements are on your project?
        type: 'checkbox',
        name: 'built with',
        message: 'Please check the elements that use have applied to your project',
        choices: ['HTML', 'CSS','JavaScript', 'NODE.JS', ],
        default: 0,

    },
    {
        //Making rules if pepople want to contribute but wont 0ver write my code
        type: 'input',
        name: 'contributing',
        message: 'If someone wanted to help you, any preferances?',
       
        validate: contributingInput => {
            if (contributingInput) {
                return true;
            } else {
                console.log('You must tell the people how to work or they will work you!');
                return false;
            }
        }
    },
    {
        
        type: 'input',
        name: 'questions',
        message: 'Gimme yo email',
        
        validate: questionsInput => {
            if (questionsInput) {
                return true;
            } else {
                console.log('Ima need your contact info');
                return false;
            }
        }
    }
];
    



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    // if there's an error, log it, otherwise log a success message

    err
      ? console.error(err)
      : console.log("Noice!You created a README file!");
  });
}
// TODO: Create a function to initialize app
function init() {
    inquirer 
    .prompt(questions)
    .then((data) => {
      const markdownContent = generateMarkdown(data);
      writeToFile("README.md", markdownContent);
    })
    .catch((err) => console.log(err));    

}

// Function call to initialize app
init();
