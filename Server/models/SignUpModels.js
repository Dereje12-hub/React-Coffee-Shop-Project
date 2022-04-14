const mongoose = require('mongoose')

//schema
const Schema = mongoose.Schema;
const signUpTemplate = new mongoose.Schema(
    {
    lastname: {
        type:String,
        required:true
    },
    firstname: {
        type:String,
        required:true
    },
    username: {
        type:String,
        required:true,
        unique: true
    },
    
    password: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },

    date:{
        type:Date,
        default:Date.now
    }

},
{collection: 'users'}
)

const Register = mongoose.model('mytable',signUpTemplate);
module.exports = Register;