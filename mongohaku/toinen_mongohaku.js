const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types; // Tuodaan ObjectId Mongoosesta

const url = 'mongodb://127.0.0.1:27017'; // Tietokannan URL ja portti
const dbName = 'Huuhaa'; // Tietokannan nimi

// Yhdistä tietokantaan
mongoose.connect(`${url}/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Virhe yhdistettäessä tietokantaan:'));
db.once('open', async () => {
  console.log('Yhdistettiin tietokantaan');

  // Määritä Schema ja Model
   const testiSchema = new mongoose.Schema({
    _id : ObjectId,
    businessId : String,
    name : String,
    registrationDate : String,
    companyForm : String,
    detailsUri : String
   });
// HUOM ! Kokoelman nimi MongoDB:ssä on testis,
// ohjelma lisää s-kirjaimen laitetun nimen perään automaattisesti 
   const Testi = mongoose.model('testi', testiSchema);
  try {
    // Hae kaikki dokumentit kokoelmasta
    const docs = await Testi.find({}).exec();
    console.log('Tulokset:', docs);
  } catch (err) {
    console.error('Virhe kyselyssä:', err);
  } finally {
    // Sulje yhteys tietokantaan
    mongoose.connection.close();
  }
});