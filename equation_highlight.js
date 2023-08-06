// Show hidden DIV on hover
$(".equation_left").mouseenter(function(){
    $(this).parent().siblings(".equation_left_hidden").css("visibility", "visible");
    $(this).css("background-color", "lightgray");
});

$(".equation_middle").mouseenter(function(){
    $(this).parent().siblings(".equation_left_hidden").css("display", "none");
    $(this).parent().siblings(".equation_middle_hidden").css("display", "block");
    $(this).css("background-color", "lightgray");
});

$(".equation_right").mouseenter(function(){
    $(this).parent().siblings(".equation_right_hidden").css("visibility", "visible");
    $(this).css("background-color", "lightgray");
    $(this).parent().siblings(".equation_label").css("visibility", "hidden");
});

// Hide DIV on mouse out
$(".equation_left").mouseleave(function(){
    $(this).parent().siblings(".equation_left_hidden").css("visibility", "hidden");
    $(this).css("background-color", "transparent");
});

$(".equation_middle").mouseleave(function(){
    $(this).parent().siblings(".equation_middle_hidden").css("display", "none");
    $(this).parent().siblings(".equation_left_hidden").css("display", "block");
    $(this).css("background-color", "transparent");
});

$(".equation_right").mouseleave(function(){
    $(this).parent().siblings(".equation_right_hidden").css("visibility", "hidden");
    $(this).css("background-color", "transparent");
    $(this).parent().siblings(".equation_label").css("visibility", "visible");
});