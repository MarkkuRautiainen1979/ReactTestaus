const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017'; // Tietokannan URL ja portti
const dbName = 'Huuhaa'; // Tietokannan nimi

// Luo yhteys tietokantaan
MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.error('Virhe yhdistettäessä tietokantaan:', err);
    return;
  }

  console.log('Yhdistettiin tietokantaan');

  const db = client.db(dbName);

  // Suorita yksinkertainen kysely
  const collection = db.collection('Testi');
  collection.find({}).toArray((err, docs) => {
    if (err) {
      console.error('Virhe kyselyssä:', err);
      return;
    }

    console.log('Tulokset:', docs);

    // Sulje yhteys tietokantaan
    client.close();
  });
});