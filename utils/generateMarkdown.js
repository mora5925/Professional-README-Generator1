// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ### License:
  ${getBadge(data.license)}
  ## Description 
  ${data.description}
  ## Table of Contents
* [username](#username)
* [email](#email)
* [project](#project)
* [username](#username)
* [command](#command)
* [need](#need)
* [contribute](#contribute)
* [license](#license)

`;
}

module.exports = generateMarkdown;

