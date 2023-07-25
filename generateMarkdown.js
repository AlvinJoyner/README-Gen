// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenses = {
    MIT: {
      badge: "MIT-green",
      notice: "This application is covered under the MIT license.",
    },
    Apache: {
      badge: "Apache-blue",
      notice: "This application is covered under the Apache license.",
    },
    GPL: {
      badge: "GPL-red",
      notice: "This application is covered under the GPL license.",
    },
    BSD: {
      badge: "BSD-yellow",
      notice: "This application is covered under the BSD license.",
    },
    None: {
      badge: "",
      notice: "",
    },
  };
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'no license') {
    return `
  ![badge](https://img.shields.io/badge/license-${license}-blue)
    `;
  } else {
    return ' ';
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'no license') {
    return `
    ## [License](#table-of-contents)
  
    The application is covered under the following license:
  
    ${renderLicenseLink(license)}
      `;
    } else {
      return ' ';
    }
   }
  


// TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title}
  
      ${data.description}
  
  ${renderLicenseSection(data.license)}
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
      ${data.installation}
  
  ## Usage
      ${data.usage}
  
  ## Contributing
      ${data.contribution}
  
  ## Tests
      ${data.test}
  
  ## Questions
     
    `;//template literals (enclosed in backticks ```) to construct a markdown string
  }
  
  module.exports = generateMarkdown;
