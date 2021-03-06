const faker = require('faker');

module.exports = {
  up(queryInterface) {
    return queryInterface.bulkInsert('Documents', [
      {
        id: 1,
        title: faker.company.catchPhrase(),
        content: faker.lorem.paragraph(),
        access: 'private',
        ownerId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 2,
        title: faker.company.catchPhrase(),
        content: faker.lorem.paragraph(),
        access: 'private',
        ownerId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 3,
        title: faker.company.catchPhrase(),
        content: faker.lorem.paragraph(),
        access: 'public',
        ownerId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 4,
        title: faker.company.catchPhrase(),
        content: faker.lorem.paragraph(),
        access: 'private',
        ownerId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 5,
        title: faker.company.catchPhrase(),
        content: faker.lorem.paragraph(),
        access: 'public',
        ownerId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 6,
        title: faker.company.catchPhrase(),
        content: faker.lorem.paragraph(),
        access: 'role',
        ownerId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 7,
        title: faker.company.catchPhrase(),
        content: faker.lorem.paragraph(),
        access: 'private',
        ownerId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 8,
        title: faker.company.catchPhrase(),
        content: faker.lorem.paragraph(),
        access: 'public',
        ownerId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 9,
        title: faker.company.catchPhrase(),
        content: faker.lorem.paragraph(),
        access: 'private',
        ownerId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 10,
        title: faker.company.catchPhrase(),
        content: faker.lorem.paragraph(),
        access: 'role',
        ownerId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 11,
        title: faker.company.catchPhrase(),
        content: faker.lorem.paragraph(),
        access: 'private',
        ownerId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 12,
        title: faker.company.catchPhrase(),
        content: faker.lorem.paragraph(),
        access: 'role',
        ownerId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down(queryInterface) {
    return queryInterface.bulkDelete('Documents', {
      id: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    });
  }
};
