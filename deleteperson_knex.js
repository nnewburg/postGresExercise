const database = require('./test_script_knex');
const queries = require('./queries_knex');

const first = process.argv[2];

queries.deletePerson(database,first);
