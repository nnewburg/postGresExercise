function lookUpPeople(client, name) {
  const queryString = `SELECT first_name, last_name, birthdate FROM famous_people WHERE first_name LIKE '${name}' OR last_name LIKE '${name}'`;
  // console.log(queryString);
  client.query(queryString, (err, res) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(`Found ${res.rows.length} persons by the name '${name}':`);
      let count = 1;
      res.rows.forEach((person) => {
        console.log(`- ${count}: ${person.first_name} ${person.last_name}, born '${person.birthdate.toDateString()}'`);
        count++;
      });

      client.end();
  });
}

exports.lookUpPeople = lookUpPeople;
