const { faker } = require('@faker-js/faker');

class dataGenerator {
    static generateUserData() {
        return {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            postalcode: faker.location.zipCode(),
        };
    }
}

module.exports = { dataGenerator };
