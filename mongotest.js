const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbname = 'nucampsite';

MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
    if (err) return console.log(err);
    console.log('DB Connected');

    const db = client.db(dbname);
    db.collection('campsites')
        .find()
        .toArray((err, result) => {
            if (err) return console.log(err);
            console.log('Result: ', result);
        });

    db.collection('campsites').insertOne(
        { name: 'Hello Camp 2', description: 'Test from new' },
        (err, result) => {
            if (err) return console.log(err);
            console.log('Insert One');
        }
    );

    db.collection('campsites')
        .find()
        .toArray((err, result) => {
            if (err) return console.log(err);
            console.log('Find after insert: ', result);
        });
});
