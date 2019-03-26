function addPeople(client,first,last,birth) {
  client.knex('famous_people').insert([{first_name: first, last_name: last, birthdate: birth}])
  .asCallback(function(err, res) {
    console.log(res);
    client.knex.destroy();
  });
}

function deletePerson(client, first){
  client.knex('famous_people').where({first_name: first}).del()
  .asCallback(function(err, res) {
    console.log(res);
    client.knex.destroy();
  });
}

function lookupPerson(client, name){
  client.knex('famous_people').where({first_name: name}).then()
  .asCallback(function(err, res) {
    res.forEach(function(person){
      console.log(`First Name: ${person.first_name} Last Name: ${person.last_name}  Birthday: ${person.birthdate.toDateString()}`)
    });
    client.knex.destroy();
  });
}

exports.addPeople = addPeople;
exports.deletePerson = deletePerson;
exports.lookupPerson = lookupPerson;

