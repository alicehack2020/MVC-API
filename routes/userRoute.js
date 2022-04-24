const router=require("express").Router()
const userController=require("../controllers/userController.js")

router.get("/",(req,res,next)=>{
    res.send("landing page")
})


router.post("/login",userController.login)
router.post("/registration",userController.register)
router.get("/userdata",userController.userdata)
router.put("/update/:id",userController.update)
router.delete("/delete/:id",userController.delete)

module.exports=router;