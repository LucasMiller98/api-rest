const bcrypt = require('bcryptjs')

module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'John',
          email: 'johnTeste@gmail.com',
          password_hash: await bcrypt.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          nome: 'John2',
          email: 'johnTeste2@gmail.com',
          password_hash: await bcrypt.hash('12345', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'John3',
          email: 'johnTeste3@gmail.com',
          password_hash: await bcrypt.hash('1234', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],

      {},
    );
  },

  down() {},
};
