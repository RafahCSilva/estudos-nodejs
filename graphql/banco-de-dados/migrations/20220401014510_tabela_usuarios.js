/**
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('usuarios', table => {
    table.increments('id').primary()
    table.string('nome').notNullable()
    table.string('email').notNullable().unique()
    table.string('senha', 60).notNullable()
    table.boolean('ativo').notNullable().defaultTo(true)
    table.timestamp('data_criacao').defaultTo(knex.fn.now())
  }).then(() => {
    return knex('usuarios').insert([
      { nome: 'João Show', email: 'jshow@empresa.com.br', senha: '12345678' },
      { nome: 'Jaime Lannister', email: 'jlann@empresa.com.br', senha: '12345678' },
      { nome: 'Gabriela T. Nunes', email: 'gtnunes@empresa.com.br', senha: '12345678' },
    ])
  })
}

/**
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('usuarios').then()
}
