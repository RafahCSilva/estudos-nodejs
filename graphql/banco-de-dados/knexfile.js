// Update with your config settings.

/**
 * @type { Object.<string, import('knex').Knex.Config> }
 */
module.exports = {

  // development: {
  //   client: 'sqlite3',
  //   connection: {
  //     filename: './dev.sqlite3'
  //   }
  // },
  development: {
    client: 'mysql',
    connection: {
      database: 'exercicios',
      user: 'user',
      password: 'pass',
      port: 3307,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

}
