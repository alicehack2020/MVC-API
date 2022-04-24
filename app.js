const express=require("express")
const router=require("./routes/userRoute.js")
const dbConneciton=require("./config/db.js")
const env=require("dotenv")
env.config()

const app=express()
app.use(express.json())
app.use(router)

const PORT=process.env.PORT
app.listen(PORT,()=>{
      new dbConneciton()
    console.log("started",PORT);
})