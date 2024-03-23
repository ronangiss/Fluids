$('#m_in').on('change', function () {
    var m_in = parseInt($(this).val());
    var m_out = parseInt($('#m_out').val());
    var m_net = m_in - m_out;
    var speed = 5 - Math.abs(m_net);

    update_water_height(m_net, speed)
});

$('#m_out').on('change', function () {
    var m_out = parseInt($(this).val());
    var m_in = parseInt($('#m_in').val());
    var m_net = m_in - m_out;
    var speed = 5 - Math.abs(m_net);

    update_water_height(m_net, speed)
});

function update_water_height(m_net, speed)
{
    var curHeight = $('.wave').css('top');
    $(":root").css("--water-height", curHeight);

    if (m_net > 0) {
        clear_all_timeouts();
        $('.wave').css('animation', '1s animate linear infinite, ' + speed + 's overflow linear forwards');
        setTimeout(function () {
            $('.wave'). css('animation', '1s animate linear infinite');
            // reset gate heights
            $('#m_in').val(0);
            $('#m_out').val(0);
            // reset water height
            $(":root").css("--water-height", '30%');
        }, speed*1000 + 1000);
    }
    else if (m_net < 0) {
        clear_all_timeouts();
        $('.wave'). css('animation', '1s animate linear infinite, ' + speed + 's drain linear forwards');
        setTimeout(function () {
            $('.wave'). css('animation', '1s animate linear infinite');
            // reset gate heights
            $('#m_in').val(0);
            $('#m_out').val(0);
            // reset water height
            $(":root").css("--water-height", '30%');
        }, speed*1000 + 1000);
    }
    else {
        clear_all_timeouts();
        $('.wave'). css('animation', '1s animate linear infinite');
    }
}

$(document).ready(function(){
    var exited_animation = true;

    // Show hidden DIV on hover
    $("#animation_container").mouseenter(function(){
        $("#animation_text").css("visibility", "visible");
        $("#animation_container").css("background-color", "lightgray");

        // Hide DIV after 5 seconds
        setTimeout(function () {
            $("#animation_text").css("visibility", "hidden");
            $("#animation_container").css("background-color", "transparent");
            exited_animation = false;
        }, 5000);
    });
    
    // Hide DIV on mouse out
    $("#animation_container").mouseleave(function(){
        $("#animation_text").css("visibility", "hidden");
        $("#animation_container").css("background-color", "transparent");
        clear_all_timeouts();
    });
});

function clear_all_timeouts()
{
    var id = window.setTimeout(function() {}, 0);
    while (id--) {
        window.clearTimeout(id); // will do nothing if no timeout with id is present
    }
}

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
        $("#intermediate_content").css("display", "intermediate");
        $("#advanced_content").css("display", "block");
    });
});

// Original puff code example from https://jsfiddle.net/Y7Ek4/22/
// Some modifications made

function animatePoof() {
    var bgTop = 0,
        frame = 0,
        frames = 6,
        frameSize = 40,
        frameDelay = 80,
        puff = $('#puff');
    var animate = function(){
        if(frame < frames){
            puff.css({
                backgroundPosition: "0 "+bgTop+"px"
            });
            bgTop = bgTop - frameSize;
            frame++;
            setTimeout(animate, frameDelay);
        }
    };
    
    animate();
    setTimeout("$('#puff').hide()", frames * frameDelay);
}
$(function() {
    $('.equation_left').click(function(e) {
        var xOffset = 24;
        var yOffset = 24;
        $(this).fadeOut('fast');
        $('#puff').css({
            left: e.pageX - xOffset + 'px',
            top: e.pageY - yOffset + 'px'
        }).show();
        animatePoof();
        // $(this).text("0");
        // $(this).fadeIn('slow');
        setTimeout("$('.equation_left_replacement').fadeIn(1000)", 400);
    });
});