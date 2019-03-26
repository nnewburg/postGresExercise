function getBeersBelowPrice(client, price) {
  const queryString = `SELECT type_of_beer, price FROM beers WHERE price <= $1 and type_of_beer like $2`;
  // console.log(queryString);
  client.query(queryString, [price*100, '%a%'], (err, res) => {
      if (err) {
        console.log(err);
        return;
      }
      // console.log(res.rows);
      console.log(`All beers $${price} or lower:`);
      res.rows.forEach((beer) => {
        console.log(`Type of beer: ${beer.type_of_beer}, price: $${beer.price/100}`);
      });
  });
}

exports.getBeersBelowPrice = getBeersBelowPrice;