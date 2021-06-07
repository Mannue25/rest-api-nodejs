const {Schema, model} = require('mongoose');



const UsersSchema = new Schema({
    name: {
        type: String, required: true, 

    },
    email: {
        type: String, required: true
    },
    password: {
        type: String, required: true
    },
    created_At: {
        type: Date, default: Date.now
    }
});

module.exports = model('Users', UsersSchema);