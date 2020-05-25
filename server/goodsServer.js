let getColl = require("../db");

module.exports = {

    //录入商品
    addGoods(req,res){
        let data = req.body;
        let goods = getColl("goods");
        goods.find({"goodName":data.goodName,"price":data.price}).toArray((err,list)=>{
            console.log(list)
            if(list[0]){
                res.json({code:500,txt:"已存在相同物品"})
            }else{
                goods.insert(data,(err,info)=>{
                    if(!err){
                        res.json({code:200,txt:"添加成功嗷"})
                    }else{
                        res.json({code:500,txt:"添加失败,原因如下："+err})
                    }
                })
            }
        })
    }
}