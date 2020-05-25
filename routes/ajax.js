let express = require("express");
let router = express.Router();
let {addGoods} = require("../server/goodsServer")
let {reg,login,getUser,updateName} = require("../server/userServer")

router.post("/addGoods",(req,res)=>{
    addGoods(req,res);
})
router.post("/reg",(req,res)=>{
    reg(req,res);
})
router.post("/login",(req,res)=>{
    login(req,res);
})

router.post("/getUser",(req,res)=>{
    getUser(req,res)
})
router.post("/updateName",(req,res)=>{
    updateName(req,res)
})
module.exports = router;