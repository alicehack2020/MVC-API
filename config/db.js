const mongoose=require("mongoose")

class dbConneciton 
{
    constructor()
    {
        this.createDBConnection()
    }

        createDBConnection=()=>{
        mongoose.connect("mongodb://localhost:27017/newDay")
        mongoose.connection.once('open',()=>{
            console.log("mongooDB connection succesfully");
        })
        mongoose.connection.on('error',()=>{
            console.log("mongooDB connection failled");
        })
    }
     
    
}
module.exports=dbConneciton