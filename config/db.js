const mongoose=require("mongoose")

class dbConneciton 
{
    constructor()
    {
        this.createDBConnection()
    }

        createDBConnection=()=>{

            const url = `mongodb+srv://mangesh:OH3otVXDsKcKguCc@cluster0.zle8g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
            const connectionParams={
                useNewUrlParser: true,
                useUnifiedTopology: true 
            }

    mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })
      //  mongoose.connect("mongodb://localhost:27017/newDay")
        // mongoose.connect('mongodb+srv://mangesh:zT7vbMI0GKcQiQHW@cluster0.zle8g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
        // {
        //     useNewUrlParser: true,
        //     useFindAndModify: false,
        //     useUnifiedTopology: true
        //   }
        // )
        // mongoose.connection.once('open',()=>{
        //     console.log("mongooDB connection succesfully");
        // })
        // mongoose.connection.on('error',()=>{
        //     console.log("mongooDB connection failled");
        // })
    }
     
    
}
module.exports=dbConneciton