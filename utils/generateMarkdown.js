// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderTableOfContents(license) {
  if(license === "None") {
    return `
  1. [ Installation ](#installation)
  2. [ Usage ](#usage)
  3. [ Contributing ](#contributing)
  4. [ Tests ](#tests)
  5. [ Questions ](#questions)
   `
  }

  return `
  1. [ Installation ](#installation)
  2. [ Usage ](#usage)
  3. [ License ](#license)
  4. [ Contributing ](#contributing)
  5. [ Tests ](#tests)
  6. [ Questions ](#questions)
  `
}


function renderLicenseBadge(license) {
  if(license === "None") {
    return "";
  }

  switch(license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
      break;
    case "Apache-2.0":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "gpl-3.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
      break;
  }
}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  return `https://opensource.org/licenses/${license}`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === "None") {
    return '';
  }

  return `
    <a name="license"></a>
    ## License
    This project is licensed under the ${license} License - see the [license info](${renderLicenseLink(license)}) for more details.
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  const { title, description, installation, usage, license, ...questions } = data;

  return `# ${title}

  ## Description
  ${description}
  <br/>
  <br/>
  ${renderLicenseBadge(license)}

  ## Table of Contents
  ${renderTableOfContents(license)}

  <a name="installation"></a>
  ## Installation
  ${installation}

  <a name="usage"></a>

  ## Usage
  ${usage}

  ${renderLicenseSection(license)}

  <a name="contributing"></a>

  ## Contributing

  <a name="tests"></a>

  ## Tests

  <a name="questions"></a>
  
  ## Questions

  [GitHub](https://github.com/${questions.github})
  For any questions, please send an Email to [${questions.email}](mailto:${questions.email})


   `;
}

module.exports = generateMarkdown;