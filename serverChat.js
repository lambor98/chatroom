var io = require('socket.io')();
var _ = require('underscore');
exports.listen = function(_server){
    io.listen(_server);
};

let userList = []
 // 使用这段代码进行socket的连接
io.on('connection',function(socket){
    console.log('一个用户已经连接');
    socket.on('login', function(user){
        console.log(user)
        user.id = socket.id;
        let flag = true;
        for(let i= 0;i<userList.length;i++){
            if(userList[i].selfName == user.selfName){
                flag = false;
                break;
            }
        }
        if(flag){
            userList.push(user);
        }
        console.log("当前用户在线数量"+userList.length)
		//socketList.push(socket);
		//send the userlist to all client
		io.emit('userList',userList);  //联系人改变
		//send the client information to client
        // socket.emit('userInfo',user); // 发送给自己
		//send login info to all.
		// socket.broadcast.emit('loginInfo',user.name+"上线了。"); 
		//发送给出自己外的用户
    });
    socket.on("online",function(){
        io.emit('userList',userList);
    })
    socket.on('disconnect',function(){
        let newList = []
        userList.map(item=>{
            if(item.id!=socket.id){
                newList.push(item)
            }
        })
        console.log(newList)
        console.log("用户下线了")
        userList = newList
        console.log("当前用户在线数量"+userList.length)
        io.emit('userList',userList); //联系人改变
      });
      socket.on('toAll',function(msgObj){
          socket.broadcast.emit("toAll",msgObj);
      })
  })