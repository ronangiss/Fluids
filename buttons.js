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
        if (content_string === "Cartesian") {
            $(".cartesian_content").css("display", "inline");
            $(".cylindrical_content").css("display", "none");
            $(".spherical_content").css("display", "none");

            $(this).css("background-color", "darkviolet");
            $(this).css("color", "white");

            $(this).siblings().css("background-color", "rgb(246, 237, 253)");
            $(this).siblings().css("color", "black");
        } else if (content_string === "Cylindrical") {
            $(".cartesian_content").css("display", "none");
            $(".cylindrical_content").css("display", "inline");
            $(".spherical_content").css("display", "none");

            $(this).css("background-color", "darkviolet");
            $(this).css("color", "white");

            $(this).siblings().css("background-color", "rgb(246, 237, 253)");
            $(this).siblings().css("color", "black");
        } else if (content_string === "Spherical") {
            $(".cartesian_content").css("display", "none");
            $(".cylindrical_content").css("display", "none");
            $(".spherical_content").css("display", "inline");

            $(this).css("background-color", "darkviolet");
            $(this).css("color", "white");

            $(this).siblings().css("background-color", "rgb(246, 237, 253)");
            $(this).siblings().css("color", "black");
        }
    });
});