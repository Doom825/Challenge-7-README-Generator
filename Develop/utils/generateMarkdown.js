// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license && license !== 'None') {
    // Turn spaces (e.g. "Apache 2.0") into URL-safe text ("Apache%202.0")
    const badgeLicense = encodeURIComponent(license);
    return `![License](https://img.shields.io/badge/License-${badgeLicense}-brightgreen.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license && license !== 'None') {
    return `* [License](#license)`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license && license !== 'None') {
    return `## License

This project is licensed under the ${license} license.`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // Build Table of Contents entries conditionally
  const licenseTOC = renderLicenseLink(data.license);

  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
${licenseTOC ? licenseTOC : ''}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

\`\`\`
${data.tests}
\`\`\`

## Questions

If you have any questions, please reach out:

- GitHub: [${data.github}](https://github.com/${data.github})  
- Email: [${data.email}](mailto:${data.email})
`;
}

export default generateMarkdown;
