// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if(license) {
        return '[![License](https://img.shields.io/badge/'+license+'-lightblue.svg)](https://www.boost.org/'+license;
    } else if(!license) {
        return '';
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
[Installation](#installation)
[Credits](#credits)
[Usage](#usage)
[License](#license)
[Contact info](#contact-info)

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}

## License
${data.license}

## Badges
${renderLicenseBadge(data.license)}

## Contact-info
${data.giturl}
${data.gituser}
${data.email}

## Tests
${data.test}
`;
}

module.exports = generateMarkdown;
