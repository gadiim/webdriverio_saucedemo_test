# Webdriverio Saucedemo Test

## Overview

This project is a test automation suite built using [WebdriverIO](https://playwright.dev/), aimed at ensuring the functionality and reliability of [web-site](https://www.saucedemo.com/). It includes a series of automated tests that cover essential user interactions, including login, item selection, and checkout processes. The goal is to validate the key user flows and guarantee the website performs as expected under various conditions.

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
   ```bash
  git clone https://github.com/yourusername/yourproject.git
   ```
2. **Install Dependencies**: Run the following command to install the required Node.js packages:
   ```bash
   npm install
   ```
   
## Running Tests

You can now run the tests with the following command:
- To open the WebdriverIO Test Runner:
   ```bash
   npm start
   ```

   ## Test Structure

The tests are organized in the following structure:
   ```sql
webdriverio_saucedemo_test/
├── .gitignore
├── README.md
├── package.json
├── tsconfig.json
├── wdio.conf.js
├── node_modules/
├── test/
│   ├── specs/
│   │   └── test.e2e.js
│   ├── pageobjects/
│   │   ├── login.page.js
│   │   └── inventory.page.js
│   └── data/
│       └── users.js
```
* 'wdio.conf.js': The WebdriverIO configuration file that contains test settings, browser capabilities, and environment details.
* 'test/specs/': Contains the end-to-end test files.
* 'test/pageobjects/': Contains the page object files that define the structure and elements of the webpages to interact with.
* 'test/data/': Contains any test data files, such as user information for login.

   ## License

This project is licensed under the MIT License. You are free to use, modify, and distribute this project. See the [LICENSE](./LICENSE.txt) file for more details.