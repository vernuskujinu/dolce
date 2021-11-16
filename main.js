$(document).ready(function(){
    $("a[href*=#]").on("click", function(e){
    var anchor = $(this);
    $('html, body').stop().animate({
    scrollTop: $(anchor.attr('href')).offset().top
    }, 777);
    e.preventDefault();
    return false;
    });
    });
    
    $(".five li ul").hide();
  $(".five li:has('.submenu')").hover(
    function(){
    $(".five li ul").stop().fadeToggle(300);}
  );