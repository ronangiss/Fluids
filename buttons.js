// Click functionality of level select blocks

$(function() {
    $("#beginner").on("click",function(e) {
        $("#beginner_content").css("display", "block");
        $("#intermediate_content").css("display", "none");
        $("#advanced_content").css("display", "none");
    });
});

$(function() {
    $("#intermediate").on("click",function(e) {
        $("#beginner_content").css("display", "none");
        $("#intermediate_content").css("display", "block");
        $("#advanced_content").css("display", "none");
    });
});

$(function() {
    $("#advanced").on("click",function(e) {
        $("#beginner_content").css("display", "none");
        $("#intermediate_content").css("display", "none");
        $("#advanced_content").css("display", "block");
    });
});

// Click functionality of reference system select blocks

$(function() {
    $(".reference_system").on("click",function(e) {
        var content_string = $(this).text().trim();
        var content_list = $(this).parent().siblings(".reference_system_contents").children();
        for (let i = 0; i < content_list.length; i++) {
            if (content_list.eq(i).attr('id') === content_string) {
                content_list.eq(i).css("display", "inline"); // show selected content
                for (let j = 0; j < content_list.length; j++) {
                    if (i != j) {
                        content_list.eq(j).css("display", "none"); // hide other content
                    }
                }
            }
        }
        $(this).css("background-color", "darkviolet");
        $(this).css("color", "white");

        $(this).siblings().css("background-color", "rgb(246, 237, 253)");
        $(this).siblings().css("color", "black");
    });
});