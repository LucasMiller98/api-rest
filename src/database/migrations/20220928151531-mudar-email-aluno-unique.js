// para o email ser único.

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.changeColumn( // editando a coluna email da tabela alunos
      'alunos',
      'email',
      {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
    );
  },

  down() {},
};
