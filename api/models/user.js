const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        
    },
    password:{
       type: String,
      
      
    },
    email:{
        type: String
    }

});

const User = mongoose.model('userp', UserSchema);
module.exports = User;