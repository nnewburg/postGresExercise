const database = require('./test_script');
const queries = require('./queries');

database.client.connect();

const arg = process.argv[2];
queries.lookUpPeople(database.client, arg);
