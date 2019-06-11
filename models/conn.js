const pgp = require('pg-promise') ({
    query: e => {
        console.log('QUERY: ', e.query);
    }
})

const options = {
    host: 'localhost',
    database: 'tdd_test',
    user: 'eli'
}

const db = pgp(options);

module.exports = db;