const { response } = require("express");
const { v4: uuidv4 } = require('uuid');

const registrationModel=require("../model/registrationModel.js")
class userController{
     
    static login=async(req,res)=>
     {
         let {mobile,id,name}=req.body
        // console.log(mobiles,id,name);
        try {
             let response=await registrationModel.find({_id:id}) 
             const mobileNumber=response[0].mobile
             console.log(mobileNumber,mobile);
            
             if(mobile===mobileNumber)
             {
                res.json({"status":200,"message":"Login Successfully","response":response})
             }
             else{
                res.json({"status":200,"message":"invalid login details"})   
             }

        } catch (error) {
         res.json({"status":200,"message":"User Not Found","response":response})
     
        }
       
    }

    static register=async(req,res,next)=>{
        
        let {name,age,mobile,password}=req.body
        //console.log(req.body);
        var unique_id=uuidv4();
        var users={
        name,age,mobile,password,unique_id
       }

       try {
        let response=await registrationModel.insertMany([users])
        res.json({"status":200,"message":"Registration completed successfully","id":unique_id,"response":response})
   
       } catch (error) {
        res.json({"status":200,"message":"Some thing went wrong","res":response,"response":error})
  
       }
      

    }

    static userdata=async(req,res,next)=>{
        try {
            let response=await registrationModel.find({})
            res.send(response)
        } catch (error) {
            res.send(error)
    
        }
    }

    static update=async(req,res,next)=>{
        let data=req.params.id
        let body=req.body;
        let response=await registrationModel.updateOne({_id:data},{$set:body})
       res.send(response)
   }

   static delete=async(req,res,next)=>{
    let data=req.params.id
    let response=await registrationModel.deleteOne({_id:data})
    
    res.send(response)


}



}

module.exports=userController