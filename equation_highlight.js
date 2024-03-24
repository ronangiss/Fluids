// Show hidden DIV on hover
$(".equation_left").mouseenter(function(){
    var termIndex = $(this).index();
    $(this).parent().siblings(".equation_left_hidden").css("visibility", "visible");
    $(this).parent().siblings(".equation_left_hidden").children().eq(termIndex).css("display", "block");
    $(this).css("background-color", "lightgray");
});

$(".equation_right").mouseenter(function(){
    var termIndex = $(this).index() - $(this).parent().children().length;
    $(this).parent().siblings(".equation_right_hidden").css("visibility", "visible");
    $(this).parent().siblings(".equation_right_hidden").children().eq(termIndex).css("display", "block");
    $(this).css("background-color", "lightgray");
    $(this).parent().siblings(".equation_label").css("visibility", "hidden");
});

// Hide DIV on mouse out
$(".equation_left").mouseleave(function(){
    var termIndex = $(this).index();
    $(this).parent().siblings(".equation_left_hidden").css("visibility", "hidden");
    $(this).parent().siblings(".equation_left_hidden").children().eq(termIndex).css("display", "none");
    $(this).css("background-color", "transparent");
});

$(".equation_right").mouseleave(function(){
    var termIndex = $(this).index() - $(this).parent().children().length;
    $(this).parent().siblings(".equation_right_hidden").css("visibility", "hidden");
    $(this).parent().siblings(".equation_right_hidden").children().eq(termIndex).css("display", "none");
    $(this).css("background-color", "transparent");
    $(this).parent().siblings(".equation_label").css("visibility", "visible");
});