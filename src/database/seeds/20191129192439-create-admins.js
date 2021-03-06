const bcrypt = require('bcryptjs');

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          id: 1,
          name: 'Leonardo Almeida',
          email: 'leonardo.almeida@metodista.br',
          password_hash: bcrypt.hashSync(
            process.env.NODE_ENV === 'development'
              ? 'admin'
              : process.env.LEONARDO_PASS,
            8
          ),
          avatar_url:
            'https://avatars3.githubusercontent.com/u/42948574?s=460&v=4',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          name: 'Erick Firmo',
          email: 'erick.serrano@metodista.br',
          password_hash: bcrypt.hashSync(
            process.env.NODE_ENV === 'development'
              ? 'admin'
              : process.env.ERICK_PASS,
            8
          ),
          avatar_url:
            'https://avatars3.githubusercontent.com/u/34639603?s=460&v=4',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          name: 'Thiago Tamosauskas',
          email: 'thiago.tamosauskas@metodista.br',
          password_hash: bcrypt.hashSync(
            process.env.NODE_ENV === 'development'
              ? 'admin'
              : process.env.THIAGO_PASS,
            8
          ),
          avatar_url:
            'https://scontent.fcgh18-1.fna.fbcdn.net/v/t1.15752-9/74674923_3214558651952697_1563643398852706304_n.jpg?_nc_cat=108&_nc_ohc=cTaAYB_1Q44AQk9GzDMO5_fhq-cOHKqw8Eq_JK9GExzilaELZXYyp959g&_nc_ht=scontent.fcgh18-1.fna&oh=08c8cd3b06327b208dd958a50a1189ec&oe=5E8A835F',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 4,
          name: 'Fernando Zancopé',
          email: 'fernando.zancope@metodista.br',
          password_hash: bcrypt.hashSync(
            process.env.NODE_ENV === 'development'
              ? 'admin'
              : process.env.FERNANDO_PASS,
            8
          ),
          avatar_url:
            'https://avatars0.githubusercontent.com/u/53548067?s=460&v=4',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('users', null, {});
  },
};
