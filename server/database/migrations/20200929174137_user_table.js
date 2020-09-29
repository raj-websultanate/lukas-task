// const { table } = require("../knex");

const tname = 'users';
exports.up = (knex) => knex.schema.createTable(tname, (t) => {
  t.increments('id');
  t.string('firstName');
  t.string('lastName');
  t.string('email');
  t.string('country');
  t.string('state');
  t.string('city');
  t.integer('zip');
  t.timestamp('created_at').notNull().defaultTo(knex.raw('CURRENT_TIMESTAMP'));
  t.timestamp('updated_at').notNull().defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
});

exports.down = (knex) => knex.schema.dropTable(tname);
