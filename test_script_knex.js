const settings = require("./settings"); // settings.json

var config = {
  client: 'pg',
  connection: {
    host : settings.hostname,
    user : settings.user,
    password : settings.password,
    database : settings.database
  }
};

const knex = require('knex')(config);

exports.knex = knex;