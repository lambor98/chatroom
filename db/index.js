let mc= require("mongodb").MongoClient;

let {host,port,dbname} = require("../config").db;
//获取配置文件中db的值;
let db = null;

mc.connect(`mongodb://${host}:${port}`,(err,client)=>{
    if(!err){
        console.log("登入成功");
        db =client.db(dbname)
    }else{
        console.log("数据库连接失败");
    }
})

module.exports = (collName)=>{
    return db.collection(collName);
}

// const db_url = "mongodb://localhost:27017"
// //定义数据库连接地址
// let MongoClient = require("mongodb").MongoClient;
// //获取数据库连接对象
// MongoClient.connect(db_url,(err,client)=>{
//     if(!err){
//         //获取制定的数据库操作对象
//         let db = client.db("test");
//         //获取集合操作对象
//         let test = db.collection("test");

//         // test.insert({id:"006",nameL:"毛狗",sex:"man"},(err,res)=>{
//         //     if(!err){
//         //         console.log("成功")
//         //     }
//         // })
 
//         test.find().toArray((err,list)=>{
//             if(!err){
//                 console.log(list)
//             }else{
//                 console.log("失败"+err)
//             }
//         })
//     }
// })