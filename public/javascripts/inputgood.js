let goods = $("#goods");

goods.submit(function(e){
    e.preventDefault();

    console.log(this)

    let {goodName,price,discount,remain,detail} = this;

    let data = {
        goodName:goodName.value,
        price:price.value,
        discount:discount.value,
        remain:remain.value,
        detail:detail.value
    }

    $.ajax({
        url:"/ajax/addGoods",
        type:"post",
        data,
        success(res){
          
               alert(res.txt)
          
        }
    })
})