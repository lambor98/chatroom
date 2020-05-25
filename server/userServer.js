let getColl = require("../db");

module.exports={
    reg(req,res){
        let data = req.body;
            let round =Math.floor(Math.random()*10)+1;
            let {user,passwd} = data;
            data.img = `/images/${round}.jpg`
            let users = getColl("user");
            let mes={};
            let unreg=/^[a-z$_]{1}[0-9a-z$_]{3,11}$/ig;
            let pwreg=/[a-z0-9$_]{6,12}/ig;
            if(unreg.test(user) && pwreg.test(passwd)){
                users.find({user}).toArray((err,list)=>{
                    if(list[0]){
                        mes.code=500;
                        mes.txt="已存在该账号";
                        res.json(mes);         
                    }else{
                        // data.passwd=jm(data.passwd)
                        //可执行加密操作
                        users.insert(data,(err,info)=>{
                            if(!err){
                                mes.code=200;
                                mes.txt="注册成功";
                                res.json(mes);                 
                            }else{
                                mes.code=500;
                                mes.txt="注册失败";
                                res.json(mes);            
                            }
                        })
                    }
                })
            }else{
                mes.code=500;
                mes.txt="账号不符合要求,6-12位非数字开头的字母字符组成";
                res.json(mes);                
            }
            

    },
    login(req,res){
        let data = req.body;
        let user = getColl("user");
        let mes = {};
        if(data.user && data.passwd){
            user.find(data).toArray((err,list)=>{
                if(!err){
                    if(list[0]){
                        req.session.userObj = list[0]
                        // console.log(req.session.userObj)
                        mes.code = 200;
                        mes.txt = data.user
                        res.json(mes);
                    }else{
                        mes.code = 400;
                        mes.txt = "账户密码错误"
                        res.json(mes);
                    }
                }else{
                    mes.code = 500;
                    mes.txt = "出现错误";
                    res.json(mes);

                }
            })
        }else{
            mes.code = 500;
            mes.txt = "请输入您的账号和密码";
            res.json(mes);
        }
    },
    getUser(req,res){
        let mes = {};
        if(req.session.userObj){
           mes.code =200
           mes.data =req.session.userObj 
           res.json(mes)
        }else{
            mes.code = 500
            res.json(mes)
        }
    },
    updateName(req,res){
        let {user,username} = req.body;
        let users = getColl("user");
        console.log(req.body)
        users.update({user},{$set:{username}},(err,info)=>{
            if(!err){
                users.find({user,username}).toArray((err,list)=>{
                    req.session.userObj = list[0]
                })
                res.json({
                    code:200,
                    txt:"修改成功"
                })
            }else{
                res.json({
                    code:500,
                    txt:"修改失败"
                })
            }
        })
        
        
    }
    

}