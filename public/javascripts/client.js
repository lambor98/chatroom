let userSelf = {}

function addUser(userList){
    console.log(userList)
    let list="";
    for(let i =0;i<userList.length;i++){
        let html = `<div class="online">
                    <div class="online_left">
                        <div class="head_img small">
                            <img src="${userList[i].selfImg}" alt="">
                        </div>
                    </div>
                    <div class="online_right">
                        <span><p>${userList[i].selfUsername}</p><img src="/images/vip.png"></span>
                        <p>[在线]</p>
                    </div>
                    </div>  `
        list+=html
    }

    $(".online_list").html(list)
    // $(".num_ol").text(userList.length)
}

function addMsg(msgObj,flag){
    let className = flag?"myself":"";
    let html = `<li class="${className}">
                    <div class="msg_left">
                        <div class="msg_head">
                            <img src="${msgObj.user.img}" alt="">
                        </div>
                    </div>
                    <div class="msg_right">
                    <p class="msg_user">${msgObj.user.nickName}</p>
                    <p class="msg_now">${msgObj.msg}</p>
                    </div>
                </li>`
    $(".chatMsg").append(html)
    // var scrollTop = $(".content").scrollTop();
    // let top = $(document.body).height();
    // let top =$(".chatMsg li:last").offset().top;
    // let height = $(".chatMsg li:last").height();
    $(".content").scrollTop(9999)
    // document.documentElement.scrollTop = top
    // console.log(top +"+"+height +"+"+scrollTop)
    // document.documentElement.scrollTop= 99999;
    // document.body.scrollTop= 999999;
    // var viewHeight = document[document.compatMode == 'CSS1Compat'?'documentElement':'body'].clientHeight;
    // var scrollHeight = document.body.scrollHeight;
    // console.log(scrollTop+" "+viewHeight+" "+scrollHeight)
    // console.log(location.pathname)
    if(location.pathname!="/chat"){
        topMsg(msgObj)
    }
  
}