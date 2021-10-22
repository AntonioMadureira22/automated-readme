// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
  [Description](##Description)

  [How to use](##HowToUse)

  [Contribution](##Contribution)

  [Username](##Username)

  [License](##License)

  [Email](##Email)





  ## Description:

  ${data.desc}

  ## How to Use:

  ${data.use}

  ## Contribution:

  ${data.contribute}

  ## Username

  ${data.username}

  # License
  ${data.license}

  # Email
  ${data.email}
`;
}

module.exports = generateMarkdown;
