
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

// var curColor = "rgb(246, 237, 253)";
curColor = $(function() {
    $('.equation_assumptions').click(function(e) {
        // Assumption box clicked
        if ($(this).css("color") === "rgb(0, 0, 0)"){
            var newColor = "darkviolet";
            $(this).css("background-color", newColor);
            $(this).css("color", "white");
            var frameSize = 40;
            var zero_term = $(this).parent().next().children('.equation').children('.equation_left_replacement');
            var equation_pieces = $(this).parent().next().children('.equation').children();

            // Fade out all terms before zero term
            for (var i = 0; i < zero_term.index(); i++){
                equation_pieces.eq(i).fadeOut('fast');
            }

            dropped_term = equation_pieces.eq(0);
            var offset = dropped_term.offset();
            var width = dropped_term.outerWidth();
            var height = dropped_term.outerHeight();

            var centerX = offset.left + width / 2;
            var centerY = offset.top + height / 2;

            var posX = centerX - frameSize / 2;
            var posY = centerY - frameSize / 2;

            $('#puff').css({
                left: posX + 'px',
                top: posY + 'px'
            }).show();
            animatePoof();
            // $(this).text("0");
            // $(this).fadeIn('slow');
            setTimeout(() => {
                zero_term.fadeIn('slow');
            }, 200);
        } else { // Assumption box unclicked
            var newColor = "rgb(246, 237, 253)";
            $(this).css("background-color", newColor);
            $(this).css("color", "black");
            var frameSize = 40;
            var zero_term = $(this).parent().next().children('.equation').children('.equation_left_replacement');
            var equation_pieces = $(this).parent().next().children('.equation').children();

            zero_term.fadeOut('fast');
            // $(this).text("0");
            // $(this).fadeIn('slow');
            setTimeout(() => {
                // Fade in all terms before zero term
                for (var i = 0; i < zero_term.index(); i++){
                    equation_pieces.eq(i).fadeIn('slow');
                }
            }, 200);
        }
        return newColor;
    });
});
// $('.equation_assumptions').hover(function(){
//     $(this).css("background-color", "rgb(217, 176, 246)");
//     }, function(){
//         $(this).css("background-color", curColor);
// });