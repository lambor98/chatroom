
var socket = io();

socket.on('userList',function(userlist){
	addUser(userlist);
})

socket.on('toAll',function(msgObj){
	addMsg(msgObj,false)
})

// socket.on("userInfo",function(user){
// 	// sessionStorage.setItem("username",user)
// 	let userObj = JSON.stringify(user)
// 	console.log(userObj)
// 	sessionStorage.setItem("userObj",userObj                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                )
// })