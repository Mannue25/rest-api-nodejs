const mongoose = require('mongoose');

const portDB = process.env.MONGODB_URI;

mongoose.connect(portDB, {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log(`DB is Connected ${db.connection.name}`))
.catch(err => console.log(err));