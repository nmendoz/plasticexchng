$('.single-item').slick({
    dots:true,
});

$('.dropdown').click(function(){
    $('.dropcont').slideDown(240);
});

$('.dropdown').hover(function(){
    $('.dropcont').slideDown(240);
});

$('.dropdown').mouseleave(function(){
    $('.dropcont').css("display", 'none');
});