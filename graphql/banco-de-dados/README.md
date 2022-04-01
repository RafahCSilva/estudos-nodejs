# GraphQL + MySQL

````shell
# dependencies
npm i -s knex mysql

# create `/knexfile.js`
npx knex init

# create new migration
npx knex migrate:make tabela_perfis
npx knex migrate:make tabela_usuarios
npx knex migrate:make tabela_usuarios_perfis

````
