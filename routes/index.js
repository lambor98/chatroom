var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.session.userObj)
  if(req.session.userObj){
    res.render('index',{user:req.session.userObj});
  }else{
    res.render("login");
  }
  
});

router.get('/input', function(req, res, next) {
  res.render("input");
});
router.get('/login', function(req, res, next) {
  res.render("login");
});
router.get('/regsiter', function(req, res, next) {
  res.render("regsiter");
});
router.get('/chat', function(req, res, next) {
  if(req.session.userObj){
    res.render('chatRoom',{user:req.session.userObj});
  }else{
    res.render("login");
  }
});
router.get('/online', function(req, res, next) {
  if(req.session.userObj){
    res.render("online",{user:req.session.userObj});
  }else{
    res.render("login");
  }
});


// res api
//   .render() 渲染ejs文件
//   .send() 直接发送数据
//   .redirect() 重定向到指定路径
//   .json() 向前端返回对象数据类型
//   .jspnp() 以jsonp的形式向前端返回对象类型数据

// req获取参数方式
// get 获取参数 ：req.query
// post 获取参数：req.body

module.exports = router;
