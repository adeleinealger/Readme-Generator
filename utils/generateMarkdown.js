function renderLicenseBadge(license) {
  if(license === 'Apache License 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GNU General Public License 3.0') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'MIT License') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'BSD 2-Clause License') {
    return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
  } else if (license === 'BSD 3-Clause License') {
    return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
  } else if (license === 'Creative Commons Zero 1.0 Universal License') {
    return '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)';
  } else if (license === 'Eclipse Public License') {
    return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
  } else if (license === 'Mozilla Public License 2.0') {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
  } else {
    return '';
  }
}

function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [License](#license)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributing

  ${data.contribution}

  ## Tests

  ${data.test}

  ## Questions

  If you have questions, please feel free to contact me at ${data.email}, or here on [GitHub](https://github.com/${data.github}).

  ## License

  This repository is licensed under the ${data.license}. See the license badge for more information.
  `;
}

export default generateMarkdown;
