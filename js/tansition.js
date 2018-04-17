// JavaScript Document
$('.ul2 span').css({
'left': $('.ul2 li').eq(0).position().left,
'width': $('.ul2 li').eq(0).outerWidth()
});
$('.ul2 li').hover(function() {
$('.ul2 span').stop().animate({
left: $(this).position().left,
width: $(this).outerWidth()
});
}, function() {
$('.ul2 span').stop().animate({
left: $('.ul2 li').eq(0).position().left,
width: $('.ul2 li').eq(0).outerWidth()
});
})
$('.ul2').on("click", "li", function() {
$('.ul2 span').stop().animate({
left: $(this).position().left,
width: $(this).outerWidth()
});
})