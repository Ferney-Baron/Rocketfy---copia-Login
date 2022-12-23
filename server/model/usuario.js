const { model, Schema } = require('mongoose');

const UsarioSchema = new Schema({
    nombre : {type : String, required : true},
    email : {type : String, required : true, unique : true},
    password : {type : String, required : true}
})

module.exports = model('User', UsarioSchema);