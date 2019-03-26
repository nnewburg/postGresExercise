const database = require('./test_script_knex');
const queries = require('./queries_knex');

const first = process.argv[2];
const last = process.argv[3];
const birthday = process.argv[4];

queries.addPeople(database,first,last,birthday);
