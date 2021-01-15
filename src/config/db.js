const mongoose = require('mongoose');

const InitiateMongoServer = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/node-api', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`Connected to DB!!!`)
    } catch(err) {
        console.log(err)
        throw err;
    }
}

module.exports = InitiateMongoServer
