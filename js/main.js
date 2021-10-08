$(".header .dropped-li").click(function(e){
    e.preventDefault()
    $(".header .dropped-ul").stop().slideToggle()
$(this).parent().find(".dropped-ul").stop().slideToggle()

})



