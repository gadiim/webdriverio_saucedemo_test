const fake = require('./fake_data_generator.js');

module.exports = {
  colors: {
    red: "rgb(226,35,26)",
  },
  tc_001: {
    username: "standard_user",
    password: "secret_sauce",
  },
  tc_002: {
    username: "standard_user",
    password: "any_random_value",
  },
  tc_003: {
    username: "standarD_user",
    password: "secret_sauce",
  },
  tc_008: {
    firstname: fake.dataGenerator.generateUserData().firstName,
    lastname: fake.dataGenerator.generateUserData().lastName,
    postalcode: fake.dataGenerator.generateUserData().postalcode,
  },
  errorMessage: {
    errorFill: "Epic sadface: Username and password do not match any user in this service",
    emptyCart: "Cart is empty"
  },
    thankyouMessage: "Thank you for your order!",
  socialMediaNames: {
    twitter: "x",
    facebook: "facebook",
    linkedin: "linkedin",
  },
};
