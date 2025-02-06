# Webdriverio Saucedemo Test

## Overview

This project is a test automation suite built using [WebdriverIO](https://webdriver.io/), aimed at ensuring the functionality and reliability of [web-site](https://www.saucedemo.com/). It includes a series of automated tests that cover essential user interactions, including login, item selection, and checkout processes.

## Test-case

You can find the test-case details [here](https://testluxequality.sharepoint.com/:x:/s/Mentors/EdKKAdQM7uRGgdG-zFoeXdEBYSo3Gg_YRlAX6WaC1imLuQ?rtime=1buvryJG3Ug).

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Install [Node.js](https://nodejs.org/) (version 14 or higher).
- **WebdriverIO** package and its dependencies (installable via npm).
- A modern web browser (e.g., Google Chrome) installed on your system for running the tests.

## Installation

To set up the project, follow these steps:

1. **Clone the Repository**:

```
  git clone https://github.com/gadiim/webdriverio_saucedemo_test.git
```

2. **Install Dependencies**:
   
   ```bash
   npm install
   ```

## Scripts

`npm run`:

- `test`: open the WebdriverIO Test Runner.
- `allure:generate`: generates the Allure report from the test results.
- `allure:open`: opens the Allure report in the browser.
- `allure:clear`: clears the reports directory.

## Allure Reporting

Allure is used for generating detailed test reports.

<img src=".images/allure_report_overview.jpg" width="400"/>  <img src=".images/allure_report_suites.jpg" width="400"/>

## Test Structure

The tests are organized in the following structure:
   ```sql
webdriverio_saucedemo_test/
├── .gitignore
├── README.md
├── package.json
├── tsconfig.json
├── wdio.conf.js
├── test/
│   ├── specs/
│   │   └── test.e2e.js
│   ├── pageobjects/
│   │   ├── loginpage.js
│   │   └── inventorypage.js
│   │   └── cartpage.js
│   │   └── checkoutpage.js
│   └── data/
│       └── users.js
```
* `wdio.conf.js`: The WebdriverIO configuration file that contains test settings, browser capabilities, and environment details.
* `test/specs/`: Contains the end-to-end test files.
* `test/pageobjects/`: Contains the page object files that define the structure and elements of the webpages to interact with.
* `test/data/`: Contains any test data files, such as user information for login.

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute this project. See the [LICENSE](./LICENSE.txt) file for more details.