const mongoose = require("mongoose")
const user=mongoose.Schema({
        "name":{type:String,required:true},
        "mobile":{type:String},
        "age":{type:String},
        "password":{type:String},
        "unique_id":{type:String}
})
module.exports=mongoose.model('registerusers',user)


